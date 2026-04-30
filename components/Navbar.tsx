import Link from "next/link";
import { auth, signOut } from "@/lib/auth";
import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";

export async function Navbar() {
  const session = await auth();
  const user = session?.user;

  async function signOutAction() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="flex items-center gap-2">
          {user ? (
            <>
              <Link
                href="/docs"
                className="rounded-md px-3 py-1.5 text-[13px] text-ink transition hover:bg-subtle"
              >
                Docs
              </Link>
              <UserMenu
                name={user.name}
                email={user.email}
                image={user.image}
                signOutAction={signOutAction}
              />
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
