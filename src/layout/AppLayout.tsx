import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { NetWorthCard } from "../components/NetWorthCard";
import { DebtCard } from "../components/DebtCard";
import { EmergencyFundCard } from "../components/EmergencyFundCard";
import { ExpensesCard } from "../components/ExpensesCard";
import { RetirementCard } from "../components/RetirementCard/RetirementCard";
import { InsightsCard } from "../components/Insights/Insights";
import { QuickActionsCard } from "../components/QuickActions/QuickActions";
import { RecentActivityCard } from "../components/RecentActivity/RecentActivity";

export const AppLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-main">
        <TopBar />

        <main className="content">
          {/* GREETING */}
          <div className="dashboard-header">
            <h1 className="greeting">
              Hello, <span className="gradient-text">Adam Mercer</span>{" "}
              <span className="wave">👋</span>
            </h1>
            <p className="subtext">
              This is the latest update for the last 7 days.
            </p>
          </div>

          {/* DASHBOARD GRID */}
          <div className="dashboard-grid">
            {/* TOP ROW */}
            <NetWorthCard />
            <ExpensesCard />
            <DebtCard />
            <EmergencyFundCard />

            {/* LEFT COLUMN */}
            <div className="left-column">
              <RetirementCard />
              <RecentActivityCard />
            </div>

            {/* RIGHT COLUMN */}
            <div className="right-column">
              <InsightsCard />
              <QuickActionsCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};