import type { Metadata } from "next";
import { LegalPolicyClient } from "~/components/legal/LegalPolicyClient";
import { storeConfig } from "~/config/store";

export const metadata: Metadata = {
  title: `Contact | ${storeConfig.name}`,
  description: "Contact the store for order and support questions.",
};

export default function ContactPage() {
  return <LegalPolicyClient pageKey="contact" />;
}
