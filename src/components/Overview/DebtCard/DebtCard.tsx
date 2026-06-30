import { TrendingDown } from "lucide-react";
import { getDebt } from "../../../data/financialCalculations";

const debt = getDebt();

export const DebtCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-wrapper">
          <TrendingDown className="card-icon" size={20} color="#0067A7" />
        </div>

        <h3 className="card-title">Debt</h3>
      </div>

      <div className="value-lg">${debt.toLocaleString()}</div>

      <p className="card-change">
        <span className="card-change negative">↑ 5%</span>
        <span className="card-change label"> vs last year</span>
      </p>
    </div>
  );
};
