import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import { siteMetadata } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = siteMetadata("pl");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="pl">{children}</RootShell>;
}
