import { Container } from "../layout/Container";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="group flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-linear-to-br from-fuchsia-500 via-violet-500 to-blue-500 transition-transform duration-200 ease-out group-hover:-rotate-2" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Morv</div>
            <div className="text-xs text-muted-foreground">
              Web • Backend (Python)
            </div>
          </div>
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
