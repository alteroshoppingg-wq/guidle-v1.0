import Link from "next/link"
import { Gamepad2 } from "lucide-react"
import { games } from "@/lib/games"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Gamepad2 className="size-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
GUID<span className="text-primary">LE</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="hidden rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-block"
            >
              {game.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
