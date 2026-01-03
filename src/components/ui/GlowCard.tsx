import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function GlowCard({ className, children }: Props) {
  return (
    <div
      className={cn(
        "hover-card hover-glow rounded-2xl border bg-card/70 backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}
