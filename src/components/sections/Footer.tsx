import { Container } from "../layout/Container";

export function Footer() {
  return (
    <footer className="mt-16 border-t">
      <Container className="flex flex-col gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span className="opacity-80">
          Morv — strony internetowe, aplikacje backendowe i skrypty
          automatyzujące. Szybkie landing page’e, modernizacja i audyt
          wydajności/SEO.
        </span>
      </Container>
    </footer>
  );
}
