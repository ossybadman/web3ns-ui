import Image from "next/image";
import { auth } from "@/lib/auth";
import { ChainCard } from "@/components/ChainCard";
import { CopyButton } from "@/components/CopyButton";
import { IntegrationTabs } from "@/components/IntegrationTabs";
import { chains, MCP_ENDPOINT } from "@/lib/chains";

export default async function DashboardPage() {
  const session = await auth();
  const user = session?.user;
  if (!user) return null;
  const totalTools = chains.reduce((sum, c) => sum + c.toolCount, 0);

  return (
    <>
      <section className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {user.image ? (
            <Image
              src={user.image}
              alt=""
              width={52}
              height={52}
              className="rounded-full border border-hairline"
            />
          ) : (
            <div className="grid h-[52px] w-[52px] place-items-center rounded-full border border-hairline bg-subtle text-[18px] font-medium text-muted">
              {(user.name ?? user.email ?? "?").slice(0, 1).toUpperCase()}
            </div>
          )}
          <div>
            <div className="text-[12px] uppercase tracking-wider text-muted">
              Welcome back
            </div>
            <h1 className="mt-0.5 text-[24px] font-medium tracking-tight text-ink">
              {user.name ?? user.email}
            </h1>
          </div>
        </div>
        <div className="flex items-baseline gap-3 rounded-xl border border-hairline bg-paper px-5 py-3 shadow-card">
          <div className="font-mono text-[28px] leading-none text-ink">
            {totalTools}
          </div>
          <div className="text-[12.5px] text-muted">tools available</div>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-[13px] font-medium uppercase tracking-wider text-muted">
            Tools by chain
          </h2>
          <span className="font-mono text-[11px] text-muted">
            {chains.length} surfaces
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chains.map((c) => (
            <ChainCard key={c.id} chain={c} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-4">
          <h2 className="text-[13px] font-medium uppercase tracking-wider text-muted">
            MCP endpoint
          </h2>
        </div>
        <div className="rounded-xl border border-hairline bg-paper p-5 shadow-card">
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 flex-1 truncate rounded-md border border-hairline bg-subtle px-3 py-2 font-mono text-[13px] text-ink">
              {MCP_ENDPOINT}
            </div>
            <CopyButton text={MCP_ENDPOINT} label="MCP endpoint" />
          </div>
          <p className="mt-3 text-[12.5px] leading-relaxed text-muted">
            Streamable HTTP transport. Compatible with the Model Context
            Protocol spec.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-4">
          <h2 className="text-[13px] font-medium uppercase tracking-wider text-muted">
            Integration
          </h2>
        </div>
        <IntegrationTabs />
      </section>
    </>
  );
}
