import type { Metadata } from "next";
import { LegalPolicyClient } from "~/components/legal/LegalPolicyClient";
import { storeConfig } from "~/config/store";

export const metadata: Metadata = {
  title: `Terms of Use | ${storeConfig.name}`,
  description: "Terms for using the store and placing orders.",
};

export default function TermsPage() {
  return <LegalPolicyClient pageKey="terms" />;
}
