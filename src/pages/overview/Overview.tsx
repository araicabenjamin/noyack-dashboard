import "./Overview.css";

import { NetWorthCard } from "../../components/Overview/NetWorthCard/NetWorthCard";
import { DebtCard } from "../../components/Overview/DebtCard/DebtCard";
import { EmergencyFundCard } from "../../components/Overview/EmergencyFundCard/EmergencyFundCard";
import { CashAvailableCard } from "../../components/Overview/CashAvailableCard/CashAvailableCard";

import { RetirementCard } from "../../components/Overview/RetirementCard/RetirementCard";
import { InsightsCard } from "../../components/Overview/Insights/Insights";
import { QuickActionsCard } from "../../components/Overview/QuickActions/QuickActions";
import { RecentActivityCard } from "../../components/Overview/RecentActivity/RecentActivity";

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
