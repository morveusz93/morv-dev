import { monoton } from "@/lib/fonts";
import { Container } from "../layout/Container";
import { Button } from "../ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="group select-none">
          <span className={`logo-word ${monoton.className}`} data-text="MORV">
            morv
          </span>
        </Link>

        <nav className="flex items-center md:gap-2">
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
