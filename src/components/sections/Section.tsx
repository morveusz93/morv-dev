import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: Props) {
  return (
    <section id={id} className={cn("section-y", className)}>
      <Container>
        <div className="md:hidden">{children}</div>
        <div className="hidden md:block">
          <Reveal>{children}</Reveal>
        </div>
      </Container>
    </section>
  );
}
