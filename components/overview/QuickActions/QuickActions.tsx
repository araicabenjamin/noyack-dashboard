import "./QuickActions.css";
import Link from "next/link";

import {
  Calculator,
  Landmark,
  Calendar,
  TrendingUp,
  Receipt,
} from "lucide-react";

export function QuickActionsCard() {
  
  return (
  <div className="card quick-actions-card">
    <h3 className="card-title">Quick Actions</h3>

    <div className="actions-list">

      {/* Run a Calculation */}
      <Link href="/tools" className="action-row">
        <div className="action-left">
          <div
            className="icon-box"
            style={{
              backgroundColor: "#e0f2fe",
              color: "#0284c7",
            }}
          >
            <Calculator size={20} />
          </div>

          <div>
            <p className="title">Run a calculation</p>
            <p className="description">
              Explore tools for your financial future
            </p>
          </div>
        </div>

        <span className="arrow">›</span>
      </Link>

      {/* Add an Account */}
      <div className="action-row">
        <div className="action-left">
          <div
            className="icon-box"
            style={{
              backgroundColor: "#e0fdf4",
              color: "#059669",
            }}
          >
            <Landmark size={20} />
          </div>

          <div>
            <p className="title">Add an Account</p>
            <p className="description">
              Connect your accounts to get a clear picture
            </p>
          </div>
        </div>

        <span className="arrow">›</span>
      </div>

      {/* Schedule an Event */}
      <div className="action-row">
        <div className="action-left">
          <div
            className="icon-box"
            style={{
              backgroundColor: "#f3e8ff",
              color: "#7c3aed",
            }}
          >
            <Calendar size={20} />
          </div>

          <div>
            <p className="title">Schedule an Event</p>
            <p className="description">
              View or schedule a meeting
            </p>
          </div>
        </div>

        <span className="arrow">›</span>
      </div>

      {/* Explore Investments */}
      <div className="action-row">
        <div className="action-left">
          <div
            className="icon-box"
            style={{
              backgroundColor: "#e0f2fe",
              color: "#0284c7",
            }}
          >
            <TrendingUp size={20} />
          </div>

          <div>
            <p className="title">Explore Investments</p>
            <p className="description">
              Learn more with Equity Trust
            </p>
          </div>
        </div>

        <span className="arrow">›</span>
      </div>

      {/* Library */}
      <div className="action-row">
        <div className="action-left">
          <div
            className="icon-box"
            style={{
              backgroundColor: "#f3e8ff",
              color: "#7c3aed",
            }}
          >
            <TrendingUp size={20} />
          </div>

          <div>
            <p className="title">See Library</p>
            <p className="description">
              Explore our library of resources
            </p>
          </div>
        </div>

        <span className="arrow">›</span>
      </div>

      {/* Transactions */}
      <div className="action-row">
        <div className="action-left">
          <div
            className="icon-box"
            style={{
              backgroundColor: "#DDF4EC",
              color: "#059669",
            }}
          >
            <Receipt size={20} />
          </div>

          <div>
            <p className="title">View Transactions</p>
            <p className="description">
              Review your recent financial activity
            </p>
          </div>
        </div>

        <span className="arrow">›</span>
      </div>

    </div>
  </div>
);
}