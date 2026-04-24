import type { Chain } from "@/lib/chains";

export function ChainCard({ chain }: { chain: Chain }) {
  return (
    <div className="group flex flex-col justify-between rounded-xl border border-hairline bg-paper p-5 shadow-card transition hover:border-ink hover:shadow-cardHover">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: chain.dot }}
          />
          <h3 className="text-[15px] font-medium text-ink">{chain.name}</h3>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          {chain.id}
        </span>
      </div>
      <div className="mt-6 flex items-end justify-between">
        <div>
          <div className="font-mono text-[28px] leading-none text-ink">
            {chain.toolCount}
          </div>
          <div className="mt-1 text-[12px] text-muted">tools</div>
        </div>
        <p className="ml-4 max-w-[180px] text-right text-[12px] leading-snug text-muted">
          {chain.blurb}
        </p>
      </div>
    </div>
  );
}
