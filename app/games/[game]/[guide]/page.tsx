import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { DifficultyBadge } from "@/components/difficulty-badge"
import { games, getGuide } from "@/lib/games"

export function generateStaticParams() {
  return games.flatMap((game) =>
    game.guides.map((guide) => ({ game: game.slug, guide: guide.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ game: string; guide: string }>
}) {
  const { game, guide } = await params
  const result = getGuide(game, guide)
  if (!result) return {}
  return {
    title: `${result.guide.title} — ${result.game.name} | GUIDLE`,
    description: result.guide.summary,
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ game: string; guide: string }>
}) {
  const { game: gameSlug, guide: guideSlug } = await params
  const result = getGuide(gameSlug, guideSlug)
  if (!result) notFound()
  const { game, guide } = result

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link
          href={`/games/${game.slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {game.name} {game.guideNoun.toLowerCase()}
        </Link>

        {/* Header */}
        <header className="mt-6 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <DifficultyBadge difficulty={guide.difficulty} />
            <span className="text-sm text-muted-foreground">{guide.patch}</span>
          </div>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-1.5 text-sm font-medium text-primary">{guide.role}</p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {guide.summary}
          </p>
        </header>

        {/* Meta cards */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {guide.meta.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-border bg-card p-4"
            >
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {m.label}
              </p>
              <p className="mt-1 font-medium">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Sections */}
        <article className="mt-10 flex flex-col gap-10">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold tracking-tight">
                {section.heading}
              </h2>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {section.body}
              </p>
              {section.list && (
                <ul className="mt-4 flex flex-col gap-2.5">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
          {guide.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </main>
    </div>
  )
}
