"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
  signOutAction: () => Promise<void>;
};

export function UserMenu({ name, email, image, signOutAction }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const initial = (name ?? email ?? "?").slice(0, 1).toUpperCase();

  useEffect(() => {
    if (!open) return;

    function onMouseDown(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Open user menu"
        className="grid h-8 w-8 place-items-center rounded-full border border-hairline bg-subtle text-[12px] font-medium text-muted transition hover:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 overflow-hidden"
      >
        {image ? (
          <Image
            src={image}
            alt=""
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{initial}</span>
        )}
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+6px)] z-40 w-44 overflow-hidden rounded-md border border-hairline bg-paper py-1 shadow-card"
        >
          <Link
            href="/profile"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex h-8 items-center px-3 text-[12.5px] text-ink transition hover:bg-subtle"
          >
            Profile
          </Link>
          <form action={signOutAction}>
            <button
              type="submit"
              role="menuitem"
              className="flex h-8 w-full items-center px-3 text-left text-[12.5px] text-ink transition hover:bg-subtle"
            >
              Sign out
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
