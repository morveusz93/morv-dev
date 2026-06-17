import { Container } from "../layout/Container";
import { EMAIL, LI } from "./Contact";

const GITHUB = "https://github.com/morveusz93";

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Morv — strony internetowe, backend i automatyzacje dla firm.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {EMAIL}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <a
            href={LI}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="/polityka-prywatnosci"
            className="link-underline hover:text-foreground transition-colors"
          >
            Polityka prywatności
          </a>
          <span className="opacity-50">
            © {new Date().getFullYear()} Morv
          </span>
        </div>
      </Container>
    </footer>
  );
}
