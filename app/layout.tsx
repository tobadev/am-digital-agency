import type { ReactNode } from "react";

// Root layout is a passthrough — all rendering happens in [locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
