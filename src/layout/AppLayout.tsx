import { Sidebar } from "./Sidebar/Sidebar";
import { TopBar } from "./TopBar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-main">
        <TopBar />

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};