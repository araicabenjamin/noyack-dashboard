import { PieChart } from "lucide-react";
import { getNetWorth } from "../../data/financialCalculations";

const netWorth = getNetWorth();

export const NetWorthCard = () => {
  return (
    <div className="card networth-card">
      <div className="card-header">
        <div className="icon-wrapper">
          <PieChart className="card-icon" size={20} color="#ffffff" />
        </div>
        <h3 className="card-title">Net Worth</h3>
      </div>
      <div className="card-value">${netWorth.toLocaleString()}</div>
      <div className="card-change positive">↑ 12% vs last year</div>
    </div>
  );
};
