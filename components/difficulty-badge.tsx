import { cn } from "@/lib/utils"

const styles: Record<string, string> = {
  Beginner: "border-chart-4/40 bg-chart-4/10 text-chart-4",
  Intermediate: "border-chart-3/40 bg-chart-3/10 text-chart-3",
  Advanced: "border-accent/40 bg-accent/10 text-accent",
}

export function DifficultyBadge({ difficulty }: { difficulty: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        styles[difficulty] ?? "border-border bg-secondary text-muted-foreground",
      )}
    >
      {difficulty}
    </span>
  )
}
