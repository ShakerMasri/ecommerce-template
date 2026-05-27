import type { Metadata } from "next";
import { LegalPolicyClient } from "~/components/legal/LegalPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Store Template",
  description: "How the store collects and uses customer data.",
};

export default function PrivacyPage() {
  return <LegalPolicyClient pageKey="privacy" />;
}
