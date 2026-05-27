import type { Metadata } from "next";
import { LegalPolicyClient } from "~/components/legal/LegalPolicyClient";

export const metadata: Metadata = {
  title: "Returns and Refunds Policy | Store Template",
  description: "Return and refund rules for store orders.",
};

export default function ReturnsPage() {
  return <LegalPolicyClient pageKey="returns" />;
}
