import "./QuickActions.css";

import {
  Calculator,
  Landmark,
  Calendar,
  TrendingUp,
  Receipt,
} from "lucide-react";

export function QuickActionsCard() {
  const actions = [
    {
      title: "Run a calculation",
      description: "Explore tools for your financial future",
      icon: <Calculator size={20} />,
      bg: "#e0f2fe",
      color: "#0284c7",
    },
    {
      title: "Add an Account",
      description: "Connect your accounts to get a clear picture",
      icon: <Landmark size={20} />,
      bg: "#e0fdf4",
      color: "#059669",
    },
    {
      title: "Schedule an Event",
      description: "View or schedule a meeting",
      icon: <Calendar size={20} />,
      bg: "#f3e8ff",
      color: "#7c3aed",
    },
    {
      title: "Explore Investments",
      description: "Learn more with Equity Trust",
      icon: <TrendingUp size={20} />,
      bg: "#e0f2fe",
      color: "#0284c7",
    },

    {
      title: "See Library",
      description: "Explore our library of resources",
      icon: <TrendingUp size={20} />,
      bg: "#f3e8ff",
      color: "#7c3aed",
    },

      {
      title: "View Transactions",
      description: "Review your recent financial activity",
      icon: <Receipt size={20} />,
      bg: "#DDF4EC",
      color: "#059669",
    },

  ];

  return (
    <div className="card quick-actions-card">
      <h3 className="card-title">Quick Actions</h3>

      <div className="actions-list">
        {actions.map((action) => (
          <div key={action.title} className="action-row">
            <div className="action-left">
              <div
                className="icon-box"
                style={{
                  backgroundColor: action.bg,
                  color: action.color,
                }}
              >
                {action.icon}
              </div>

              <div>
                <p className="title">{action.title}</p>
                <p className="description">{action.description}</p>
              </div>
            </div>

            <span className="arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}