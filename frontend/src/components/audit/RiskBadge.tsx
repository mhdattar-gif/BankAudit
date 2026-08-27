import { cn } from "@/lib/utils";
import type { RiskLevel } from "@/lib/types";

const map: Record<RiskLevel, string> = {
  Critical: "bg-red-50 text-red-700 border-red-200",
  High: "bg-amber-50 text-amber-800 border-amber-200",
  Medium: "bg-yellow-50 text-yellow-800 border-yellow-200",
  Low: "bg-emerald-50 text-emerald-800 border-emerald-200",
};

export function RiskBadge({
  risk,
  size = "sm",
  className,
}: {
  risk: RiskLevel;
  size?: "sm" | "md";
  className?: string;
}) {
  const cls = map[risk] ?? "bg-muted text-muted-foreground border-border";
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[4px] border font-semibold uppercase tracking-wide",
        size === "sm" ? "px-1.5 py-0.5 text-[11px]" : "px-2 py-0.5 text-xs",
        cls,
        className,
      )}
    >
      {risk}
    </span>
  );
}

export function RiskScore({
  score,
  risk,
  size = "md",
}: {
  score: number;
  risk: RiskLevel;
  size?: "md" | "lg";
}) {
  const color =
    risk === "Critical"
      ? "text-critical"
      : risk === "High"
        ? "text-high"
        : risk === "Medium"
          ? "text-medium"
          : "text-low";
  return (
    <div className="flex items-baseline gap-1">
      <span className={cn("num font-semibold", color, size === "lg" ? "text-5xl" : "text-base")}>
        {score}
      </span>
      <span className={cn("text-muted-foreground", size === "lg" ? "text-lg" : "text-xs")}>
        /100
      </span>
    </div>
  );
}
