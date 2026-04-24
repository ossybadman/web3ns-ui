"use client";

import { useState } from "react";
import { CopyButton } from "./CopyButton";

type TabId = "direct" | "cursor" | "claude";

const ENDPOINT = "https://webns-production.up.railway.app/mcp";

const cursorJson = `{
  "mcpServers": {
    "web3ns": {
      "url": "${ENDPOINT}"
    }
  }
}`;

const claudeCmd = `claude mcp add --transport http web3ns ${ENDPOINT}`;

const tabs: { id: TabId; label: string }[] = [
  { id: "direct", label: "Direct" },
  { id: "cursor", label: "Cursor" },
  { id: "claude", label: "Claude Code" },
];

export function IntegrationTabs() {
  const [active, setActive] = useState<TabId>("direct");

  return (
    <div className="overflow-hidden rounded-xl border border-hairline bg-paper shadow-card">
      <div
        role="tablist"
        aria-label="Integration method"
        className="flex border-b border-hairline"
      >
        {tabs.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.id)}
              className={`relative flex-1 px-4 py-3 text-[13px] font-medium transition ${
                isActive
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {t.label}
              {isActive && (
                <span
                  aria-hidden
                  className="absolute inset-x-3 -bottom-px h-px bg-ink"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="p-5">
        {active === "direct" && (
          <div className="space-y-3">
            <p className="text-[13px] leading-relaxed text-muted">
              Point any MCP-compatible client at the endpoint below. Streamable
              HTTP transport, no SDK required.
            </p>
            <CodeBlock content={ENDPOINT} copyText={ENDPOINT} />
          </div>
        )}

        {active === "cursor" && (
          <div className="space-y-3">
            <p className="text-[13px] leading-relaxed text-muted">
              Add to{" "}
              <code className="rounded bg-subtle px-1.5 py-0.5 font-mono text-[12px] text-ink">
                ~/.cursor/mcp.json
              </code>{" "}
              and restart Cursor.
            </p>
            <CodeBlock content={cursorJson} copyText={cursorJson} />
          </div>
        )}

        {active === "claude" && (
          <div className="space-y-3">
            <p className="text-[13px] leading-relaxed text-muted">
              Run from your terminal — Claude Code picks it up immediately.
            </p>
            <CodeBlock content={claudeCmd} copyText={claudeCmd} />
          </div>
        )}
      </div>
    </div>
  );
}

function CodeBlock({
  content,
  copyText,
}: {
  content: string;
  copyText: string;
}) {
  return (
    <div className="relative rounded-lg border border-hairline bg-subtle">
      <pre className="overflow-x-auto px-4 py-3 pr-24 font-mono text-[12.5px] leading-relaxed text-ink">
        <code>{content}</code>
      </pre>
      <div className="absolute right-2 top-2">
        <CopyButton text={copyText} />
      </div>
    </div>
  );
}
