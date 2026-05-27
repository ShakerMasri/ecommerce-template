import type { Metadata } from "next";
import { LegalPolicyClient } from "~/components/legal/LegalPolicyClient";
import { storeConfig } from "~/config/store";

export const metadata: Metadata = {
  title: `Shipping and Delivery Policy | ${storeConfig.name}`,
  description: "Delivery areas, prices, and timing for store orders.",
};

export default function ShippingPage() {
  return <LegalPolicyClient pageKey="shipping" />;
}
