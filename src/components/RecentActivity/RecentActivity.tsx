import {
  TrendingUp,
  TrendingDown,
  Wallet,
} from "lucide-react";

import "./RecentActivity.css";

export function RecentActivityCard() {
  const activities = [
    {
      title: "Net worth increased",
      description: "Your net worth is up $1,240 this week",
      amount: "+$1,240",
      date: "May 12th, 2025",
      icon: <TrendingUp size={20} />,
      bg: "#e0f2f1",
      color: "#0f766e",
    },
    {
      title: "Spending exceeded target",
      description: "You spent 18% more than your weekly avg",
      amount: "+$18",
      date: "May 12th, 2025",
      icon: <TrendingDown size={20} />,
      bg: "#fef3c7",
      color: "#d97706",
    },
    {
      title: "Investment contribution added",
      description: "You contributed $1,000 to investment",
      amount: "+$1,000",
      date: "May 12th, 2025",
      icon: <Wallet size={20} />,
      bg: "#e0f2f1",
      color: "#0f766e",
    },
  ];

  return (
    <div className="card recent-activity-card">
      <h3 className="card-title">Recent Activity</h3>

      <div className="activity-list">
        {activities.map((item) => (
          <div key={item.title} className="activity-row">
            
            <div className="activity-left">
              <div
                className="icon-box"
                style={{
                  backgroundColor: item.bg,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              <div>
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>

            <div className="activity-right">
              <p className="amount">{item.amount}</p>
              <p className="date">{item.date}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}