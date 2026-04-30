"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "web3ns:sidebar:expanded";

type IconProps = { className?: string };

function HomeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

function AppsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.25" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.25" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.25" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.25" />
    </svg>
  );
}

function ChainsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
}

function IntegrationIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="8" width="6" height="8" rx="1.25" />
      <rect x="15" y="8" width="6" height="8" rx="1.25" />
      <path d="M9 12h6" />
    </svg>
  );
}

function SkillsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z" />
      <path d="M18.5 16l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6z" />
      <path d="M5 16.5l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4.4-1z" />
    </svg>
  );
}

function SettingsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.36.62.97.99 1.6 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function ToggleIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M9.5 4.5v15" />
      {expanded ? <path d="M15 9l-3 3 3 3" /> : <path d="M13 9l3 3-3 3" />}
    </svg>
  );
}

type Item = {
  label: string;
  icon: (props: IconProps) => React.JSX.Element;
};

const TOP_ITEMS: Item[] = [
  { label: "Overview", icon: HomeIcon },
  { label: "Apps", icon: AppsIcon },
  { label: "Chains", icon: ChainsIcon },
  { label: "Integration", icon: IntegrationIcon },
  { label: "Skills", icon: SkillsIcon },
];

const BOTTOM_ITEMS: Item[] = [{ label: "Settings", icon: SettingsIcon }];

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setExpanded(stored === "true");
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, String(expanded));
    }
  }, [expanded, hydrated]);

  return (
    <aside
      className={`sticky top-0 flex h-screen shrink-0 flex-col border-r border-hairline bg-paper transition-[width] duration-200 ease-out ${
        expanded ? "w-56" : "w-14"
      }`}
      aria-label="Primary navigation"
    >
      <div
        className={`flex h-14 items-center border-b border-hairline ${
          expanded ? "justify-end px-3" : "justify-center px-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="grid h-8 w-8 place-items-center rounded-md text-muted transition hover:bg-subtle hover:text-ink"
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          aria-expanded={expanded}
        >
          <ToggleIcon expanded={expanded} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-2 py-3">
        {TOP_ITEMS.map((item) => (
          <SidebarItem key={item.label} item={item} expanded={expanded} />
        ))}

        <div className="mt-auto flex flex-col gap-1 border-t border-hairline pt-3">
          {BOTTOM_ITEMS.map((item) => (
            <SidebarItem key={item.label} item={item} expanded={expanded} />
          ))}
        </div>
      </nav>
    </aside>
  );
}

function SidebarItem({ item, expanded }: { item: Item; expanded: boolean }) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      className={`group flex h-9 items-center gap-3 rounded-md text-[13.5px] text-ink transition hover:bg-subtle ${
        expanded ? "px-2.5" : "justify-center px-0"
      }`}
      title={expanded ? undefined : item.label}
    >
      <Icon className="h-[18px] w-[18px] shrink-0 text-ink" />
      <span
        className={`overflow-hidden whitespace-nowrap transition-[opacity,max-width] duration-200 ${
          expanded ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {item.label}
      </span>
    </button>
  );
}
