import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { Logo } from "@/components/Logo";
import { SignInButtons } from "@/components/SignInButtons";

export default async function SignInPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="grid min-h-screen place-items-center bg-paper px-5 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex justify-center">
          <Logo />
        </div>

        <div className="rounded-2xl border border-hairline bg-paper p-7 shadow-card">
          <h1 className="text-center text-[20px] font-medium tracking-tight text-ink">
            Sign in to web3ns
          </h1>
          <p className="mt-2 text-center text-[13.5px] leading-relaxed text-muted">
            Get your MCP endpoint and integration snippets.
          </p>

          <div className="mt-7">
            <SignInButtons />
          </div>

          <p className="mt-6 text-center text-[11.5px] leading-relaxed text-muted">
            We only use your account for authentication. No posting, no email.
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-[13px] text-muted transition hover:text-ink"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
