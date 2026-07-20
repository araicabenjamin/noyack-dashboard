import { useState } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { TopBar } from "./Topbar/TopBar";
import CopilotModal from "../components/copilot/CopilotModal";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  return (
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
  );
};
