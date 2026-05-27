import type { Metadata } from "next";
import { LegalPolicyClient } from "~/components/legal/LegalPolicyClient";

export const metadata: Metadata = {
  title: "Shipping and Delivery Policy | Store Template",
  description: "Delivery areas, prices, and timing for store orders.",
};

export default function ShippingPage() {
  return <LegalPolicyClient pageKey="shipping" />;
}
