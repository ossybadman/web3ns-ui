import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { Logo } from "./Logo";
import { SignOutButton } from "./SignOutButton";

export async function Navbar() {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="flex items-center gap-3">
          {user ? (
            <>
              <div className="hidden items-center gap-2 sm:flex">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-full border border-hairline"
                  />
                ) : (
                  <div className="grid h-6 w-6 place-items-center rounded-full border border-hairline bg-subtle text-[11px] font-medium text-muted">
                    {(user.name ?? user.email ?? "?").slice(0, 1).toUpperCase()}
                  </div>
                )}
                <span className="text-[13px] text-ink">
                  {user.name ?? user.email}
                </span>
              </div>
              <SignOutButton />
            </>
          ) : (
            <Link
              href="/signin"
              className="rounded-md border border-ink bg-ink px-3 py-1.5 text-[13px] font-medium text-paper transition hover:bg-[#1a1a1a]"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
