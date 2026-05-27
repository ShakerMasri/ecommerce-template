import type { Metadata } from "next";
import { LegalPolicyClient } from "~/components/legal/LegalPolicyClient";
import { storeConfig } from "~/config/store";

export const metadata: Metadata = {
  title: `Privacy Policy | ${storeConfig.name}`,
  description: "How the store collects and uses customer data.",
};

export default function PrivacyPage() {
  return <LegalPolicyClient pageKey="privacy" />;
}
