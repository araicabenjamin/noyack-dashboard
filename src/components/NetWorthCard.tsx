import { PieChart } from "lucide-react";
import { getNetWorth } from "../data/financialCalculations";

const netWorth = getNetWorth();

export const NetWorthCard = () => {
  return (
    <div className="card networth-card">
      <div className="card-header">
        <div className="icon-wrapper">
          <PieChart className="card-icon" size={24} color="#0067A7" />
        </div>
        <h3 className="card-title">Net Worth</h3>
      </div>
      <div className="card-value">${netWorth.toLocaleString()}</div>
      <div className="card-change positive">↑ 12% vs last year</div>
    </div>
  );
};
