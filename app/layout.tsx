import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "web3ns — Resolve, register, and manage blockchain names",
  description:
    "A single MCP endpoint for ENS, SuiNS, SNS, Aptos Names, and Basenames. 62 tools across 5 chains. Works with any AI agent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
