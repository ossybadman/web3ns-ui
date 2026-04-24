import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { chains, MCP_ENDPOINT } from "@/lib/chains";

const supportedChains = chains.filter((c) => c.id !== "cross");

const features = [
  {
    title: "62 tools across 5 chains",
    body: "Register, renew, resolve, and manage names without juggling SDKs. Every chain, one surface.",
  },
  {
    title: "Single MCP endpoint",
    body: "One streamable HTTP URL. No client libraries. No per-chain integration work.",
  },
  {
    title: "Works with any AI agent",
    body: "Drop into Claude Code, Cursor, or any MCP-compatible client. Your agent gains naming superpowers.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 pb-24">
        <section className="pt-20 sm:pt-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-subtle px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              MCP server live
            </span>
            <h1 className="mt-6 text-[44px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[64px]">
              The naming layer
              <br />
              for the multi-chain web.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
              Resolve, register, and manage blockchain names across five chains
              from a single endpoint. Built for AI agents, usable from anything
              that speaks MCP.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/signin"
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-[14px] font-medium text-paper shadow-card transition hover:bg-[#1a1a1a] hover:shadow-cardHover"
              >
                Get started
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 7h8m-3-3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <a
                href={MCP_ENDPOINT}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-paper px-5 py-3 font-mono text-[12.5px] text-ink transition hover:border-ink"
              >
                {MCP_ENDPOINT.replace(/^https?:\/\//, "")}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              {supportedChains.map((c) => (
                <span
                  key={c.id}
                  className="inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-3 py-1.5 text-[12.5px] text-ink"
                >
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: c.dot }}
                  />
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-paper p-6 sm:p-8">
              <div className="flex h-7 w-7 items-center justify-center rounded-md border border-hairline bg-subtle font-mono text-[13px] text-ink">
                {features.indexOf(f) + 1}
              </div>
              <h3 className="mt-5 text-[16px] font-medium text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {f.body}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-24">
          <div className="rounded-2xl border border-hairline bg-subtle p-8 sm:p-12">
            <h2 className="max-w-2xl text-[28px] font-medium leading-tight tracking-tight text-ink sm:text-[32px]">
              Plug it in. Your agent already knows what to do.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              Sign in to grab the endpoint, see tool counts per chain, and copy
              integration snippets for Cursor, Claude Code, or anything else.
            </p>
            <Link
              href="/signin"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-[14px] font-medium text-paper shadow-card transition hover:bg-[#1a1a1a]"
            >
              Get started
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-[12px] text-muted sm:flex-row sm:items-center">
          <div className="font-mono">© web3ns</div>
          <div className="flex items-center gap-4">
            <a
              href={MCP_ENDPOINT}
              target="_blank"
              rel="noreferrer"
              className="font-mono hover:text-ink"
            >
              MCP endpoint
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
