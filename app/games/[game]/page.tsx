import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { DifficultyBadge } from "@/components/difficulty-badge"
import { games, getGame } from "@/lib/games"

export function generateStaticParams() {
  return games.map((g) => ({ game: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ game: string }>
}) {
  const { game: gameSlug } = await params
  const game = getGame(gameSlug)
  if (!game) return {}
  return {
    title: `${game.name} ${game.guideNoun} — GUIDLE`,
    description: game.description,
  }
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ game: string }>
}) {
  const { game: gameSlug } = await params
  const game = getGame(gameSlug)
  if (!game) notFound()

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Banner */}
        <section className="relative border-b border-border">
          <div className="relative h-56 w-full overflow-hidden sm:h-72">
            <Image
              src={game.image || "/placeholder.svg"}
              alt={`${game.name} cover art`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <div className="-mt-16 pb-8">
              <Link
                href="/"
                className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                All games
              </Link>
              <span className="mt-4 inline-block rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                {game.category}
              </span>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {game.name}
              </h1>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {game.description}
              </p>
            </div>
          </div>
        </section>

        {/* Guides list */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">
            {game.guides.length} {game.guideNoun}
          </h2>
          <div className="grid gap-4">
            {game.guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/games/${game.slug}/${guide.slug}`}
                className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {guide.title}
                    </h3>
                    <DifficultyBadge difficulty={guide.difficulty} />
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {guide.role} · {guide.patch}
                  </p>
                  <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                    {guide.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 self-start text-sm font-medium text-primary sm:self-center">
                  Read
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
