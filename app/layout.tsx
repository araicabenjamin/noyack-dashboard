"use client";
import "./globals.css";

import { Sidebar } from "../components/layout/Sidebar/Sidebar";
import { TopBar } from "../components/layout/TopBar/TopBar";
import CopilotModal from "../components/copilot/CopilotModal";

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          {isCopilotOpen && (
            <CopilotModal onClose={() => setIsCopilotOpen(false)} />
          )}

          <Sidebar />

          <div className="app-main">
            <TopBar onOpenCopilot={() => setIsCopilotOpen(true)} />

            <main className="content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}