import { monoton } from "@/lib/fonts";
import { Container } from "../layout/Container";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="group select-none">
          <span className={`logo-word ${monoton.className}`}>MORV</span>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" asChild>
            <a
              href="#services"
              className="link-underline px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Usługi
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a
              href="#stack"
              className="link-underline px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Stack
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a
              href="#contact"
              className="link-underline px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Kontakt
            </a>
          </Button>
        </nav>
      </Container>
    </header>
  );
}
