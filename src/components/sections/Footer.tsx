import { Container } from "../layout/Container";
import { LI } from "./Contact";

const GITHUB = "https://github.com/morveusz93";

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground max-w-sm">
          Morv — strony internetowe, backend i automatyzacje dla firm.
        </p>

        <div className="flex items-center gap-5 text-sm text-muted-foreground">
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
          <span className="opacity-50">
            © {new Date().getFullYear()} Morv
          </span>
        </div>
      </Container>
    </footer>
  );
}
