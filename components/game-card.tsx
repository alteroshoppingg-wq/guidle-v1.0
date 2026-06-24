import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Game } from "@/lib/games"

export function GameCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={`${game.name} cover art`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-border bg-background/70 px-2.5 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
          {game.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight">{game.name}</h3>
        <p className="mt-1.5 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {game.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {game.guides.length} {game.guideNoun.toLowerCase()}
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-primary">
            View {game.guideNoun.toLowerCase()}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
