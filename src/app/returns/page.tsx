import type { Metadata } from "next";
import { LegalPolicyClient } from "~/components/legal/LegalPolicyClient";
import { storeConfig } from "~/config/store";

export const metadata: Metadata = {
  title: `Returns and Refunds Policy | ${storeConfig.name}`,
  description: "Return and refund rules for store orders.",
};

export default function ReturnsPage() {
  return <LegalPolicyClient pageKey="returns" />;
}
