import { TrendingDown } from "lucide-react";

export const DebtCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-wrapper">
          <TrendingDown className="card-icon" size={20} color="#0067A7"  />
        </div>
        <h3 className="card-title">Debt</h3>
      </div>

      <div className="card-value">$12,400</div>

      <div className="card-change negative">↑ 5% vs last year</div>
    </div>
  );
};
