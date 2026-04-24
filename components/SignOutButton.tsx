import { signOut } from "@/lib/auth";

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="rounded-md border border-hairline bg-paper px-3 py-1.5 text-[13px] font-medium text-ink transition hover:border-ink"
      >
        Sign out
      </button>
    </form>
  );
}
