import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:py-14">
            {children}
          </main>
          <footer className="mt-auto border-t border-hairline">
            <div className="mx-auto max-w-6xl px-5 py-8 font-mono text-[12px] text-muted">
              © web3ns
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
