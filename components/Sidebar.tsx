"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "web3ns:sidebar:expanded";

type IconProps = { className?: string };

const ICON_BASE_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

function HomeIcon({ className }: IconProps) {
  return (
    <svg {...ICON_BASE_PROPS} className={className}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

function AppsIcon({ className }: IconProps) {
  return (
    <svg {...ICON_BASE_PROPS} className={className}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.25" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.25" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.25" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.25" />
    </svg>
  );
}

function ChainsIcon({ className }: IconProps) {
  return (
    <svg {...ICON_BASE_PROPS} className={className}>
      <path d="M9.5 14.5l5-5" />
      <path d="M7 12.5l-1.5 1.5a3.5 3.5 0 0 0 4.95 4.95l2-2" />
      <path d="M17 11.5l1.5-1.5a3.5 3.5 0 0 0-4.95-4.95l-2 2" />
    </svg>
  );
}

function IntegrationIcon({ className }: IconProps) {
  return (
    <svg {...ICON_BASE_PROPS} className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M6.5 10v3a2.5 2.5 0 0 0 2.5 2.5h5" />
    </svg>
  );
}

function SkillsIcon({ className }: IconProps) {
  return (
    <svg {...ICON_BASE_PROPS} className={className}>
      <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
      <path d="M14 4l2.5 5.5L22 12l-5.5 2.5L14 20l-2.5-5.5L6 12l5.5-2.5L14 4z" />
    </svg>
  );
}

function SettingsIcon({ className }: IconProps) {
  return (
    <svg {...ICON_BASE_PROPS} className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.36.62.97.99 1.6 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg {...ICON_BASE_PROPS} className={className}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg {...ICON_BASE_PROPS} className={className}>
      <path d="M9 6l6 6-6 6" />
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
      className={`sticky top-14 flex h-[calc(100vh-3.5rem)] shrink-0 flex-col border-r border-hairline bg-paper transition-[width] duration-200 ease-out ${
        expanded ? "w-56" : "w-14"
      }`}
      aria-label="Primary navigation"
    >
      <nav className="flex flex-1 flex-col gap-1 px-2 py-3">
        {TOP_ITEMS.map((item) => (
          <SidebarItem key={item.label} item={item} expanded={expanded} />
        ))}

        <div className="mt-auto flex flex-col gap-1 border-t border-hairline pt-3">
          {BOTTOM_ITEMS.map((item) => (
            <SidebarItem key={item.label} item={item} expanded={expanded} />
          ))}
          <ToggleRow
            expanded={expanded}
            onToggle={() => setExpanded((v) => !v)}
          />
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

function ToggleRow({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  const Icon = expanded ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`group flex h-9 items-center gap-3 rounded-md text-[13.5px] text-muted transition hover:bg-subtle hover:text-ink ${
        expanded ? "px-2.5" : "justify-center px-0"
      }`}
      aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      aria-expanded={expanded}
      title={expanded ? undefined : "Expand"}
    >
      <Icon className="h-[18px] w-[18px] shrink-0" />
      <span
        className={`overflow-hidden whitespace-nowrap transition-[opacity,max-width] duration-200 ${
          expanded ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        Collapse
      </span>
    </button>
  );
}
