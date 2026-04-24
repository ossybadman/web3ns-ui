export type Chain = {
  id: string;
  name: string;
  toolCount: number;
  dot: string;
  blurb: string;
};

export const chains: Chain[] = [
  {
    id: "suins",
    name: "SuiNS",
    toolCount: 17,
    dot: "#4DA2FF",
    blurb: "Names on Sui — register, manage, and resolve.",
  },
  {
    id: "ens",
    name: "ENS",
    toolCount: 13,
    dot: "#5298FF",
    blurb: "Ethereum Name Service — the original.",
  },
  {
    id: "sns",
    name: "SNS",
    toolCount: 10,
    dot: "#9945FF",
    blurb: "Solana Name Service — fast, low-cost names.",
  },
  {
    id: "aptos",
    name: "Aptos Names",
    toolCount: 10,
    dot: "#06F7C2",
    blurb: "Move-based naming on Aptos.",
  },
  {
    id: "basenames",
    name: "Basenames",
    toolCount: 10,
    dot: "#0052FF",
    blurb: "Names on Base — Coinbase's L2.",
  },
  {
    id: "cross",
    name: "Cross-chain",
    toolCount: 2,
    dot: "#0A0A0A",
    blurb: "Resolve and reverse-lookup across all 5 chains.",
  },
];

export const MCP_ENDPOINT = "https://webns-production.up.railway.app/mcp";
