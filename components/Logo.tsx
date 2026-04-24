import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-ink no-underline"
      aria-label="web3ns home"
    >
      <span
        aria-hidden
        className="inline-block h-2.5 w-2.5 rounded-full bg-ink"
      />
      <span className="font-mono text-[15px] font-medium tracking-tight">
        web3ns
      </span>
    </Link>
  );
}
