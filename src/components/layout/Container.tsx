import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Container({ className, children }: Props) {
  return <div className={cn("container-x", className)}>{children}</div>;
}
