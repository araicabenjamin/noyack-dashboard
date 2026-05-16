import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { NetWorthCard } from "../components/NetWorthCard";
import { DebtCard } from "../components/DebtCard";
import { EmergencyFundCard } from "../components/EmergencyFundCard";
import { CashAvailableCard } from "../components/CashAvailableCard";
import { RetirementCard } from "../components/RetirementCard/RetirementCard";
import { InsightsCard } from "../components/Insights/Insights";
import { QuickActionsCard } from "../components/QuickActions/QuickActions";
import { RecentActivityCard } from "../components/RecentActivity/RecentActivity";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

export const AppLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-main">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.02}
        >
          <TopBar />
        </motion.div>

        <main className="content">
          {/* GREETING */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="dashboard-header">
              <h1 className="greeting">
                Hello, <span className="gradient-text">Adam Mercer</span>{" "}
                <span className="wave">👋</span>
              </h1>

              <p className="subtext">
                This is the latest update for the last 7 days.
              </p>
            </div>
          </motion.div>

          {/* DASHBOARD GRID */}
          <div className="dashboard-grid">
            {/* TOP ROW */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <NetWorthCard />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.05}
            >
              <CashAvailableCard />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <DebtCard />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
            >
              <EmergencyFundCard />
            </motion.div>

            {/* LEFT COLUMN */}
            <motion.div
              className="left-column"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              <RetirementCard />
              <RecentActivityCard />
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div
              className="right-column"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
            >
              <InsightsCard />
              <QuickActionsCard />
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};
