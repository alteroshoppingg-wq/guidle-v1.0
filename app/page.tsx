import Link from "next/link"
import { ArrowRight, BookOpen, Swords, Users } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { GameCard } from "@/components/game-card"
import { games } from "@/lib/games"

export default function HomePage() {
  const totalGuides = games.reduce((sum, g) => sum + g.guides.length, 0)

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 0%, oklch(0.82 0.16 185 / 0.18), transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                Builds & guides, kept current
              </span>
              <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                Master the meta in{" "}
                <span className="text-primary">every game</span> you play
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Curated builds, loadouts, and strategy guides for your favorite
                games — written to help you climb, win, and have more fun.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="#games"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Browse games
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href={`/games/${games[0].slug}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Featured builds
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4">
              <Stat icon={Swords} value={`${games.length}`} label="Games" />
              <Stat icon={BookOpen} value={`${totalGuides}`} label="Guides" />
              <Stat icon={Users} value="All roles" label="Covered" />
            </div>
          </div>
        </section>

        {/* Games grid */}
        <section id="games" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Choose your game
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Jump into builds and guides tailored to each title.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>GUIDLE — community game guides.</p>
          <p>Not affiliated with the game publishers.</p>
        </div>
      </footer>
    </div>
  )
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center">
      <Icon className="size-5 text-primary" />
      <span className="mt-3 text-xl font-semibold tracking-tight">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
