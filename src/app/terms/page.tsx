import type { Metadata } from "next";
import { LegalPolicyClient } from "~/components/legal/LegalPolicyClient";

export const metadata: Metadata = {
  title: "Terms of Use | Store Template",
  description: "Terms for using the store and placing orders.",
};

export default function TermsPage() {
  return <LegalPolicyClient pageKey="terms" />;
}
