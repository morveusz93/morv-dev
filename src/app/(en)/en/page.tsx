import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { homeAlternates } from "@/lib/site";

export const metadata: Metadata = { alternates: homeAlternates("en") };

export default function Page() {
  return <HomePage lang="en" />;
}
