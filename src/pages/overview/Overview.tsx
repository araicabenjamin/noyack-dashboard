import "./Overview.css";

import { NetWorthCard } from "../../components/overview/quickActions/NetWorthCard/NetWorthCard";
import { DebtCard } from "../../components/overview/DebtCard";
import { EmergencyFundCard } from "../../components/overview/EmergencyFundCard";
import { CashAvailableCard } from "../../components/overview/CashAvailableCard";

import { RetirementCard } from "../../components/overview/retirementCard/RetirementCard";
import { InsightsCard } from "../../components/overview/insights/Insights";
import { QuickActionsCard } from "../../components/overview/quickActions/QuickActions";
import { RecentActivityCard } from "../../components/overview/recentActivity/RecentActivity";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

export const Overview = () => {
  return (
    <>
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

          <p className="helper-regular">
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
    </>
  );
};