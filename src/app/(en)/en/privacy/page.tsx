import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/PrivacyPage";
import { getDict } from "@/lib/i18n";

const { privacy } = getDict("en");

export const metadata: Metadata = {
  title: privacy.metaTitle,
  description: privacy.metaDescription,
  robots: { index: false },
};

export default function Page() {
  return <PrivacyPage lang="en" />;
}
