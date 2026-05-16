import { DollarSign } from "lucide-react";
import { financialMetrics } from "../data/financialmetrics";

export const EmergencyFundCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-wrapper">
          <DollarSign className="card-icon" size={20} color="#0067A7" />
        </div>

        <h3 className="card-title">Emergency Fund</h3>
      </div>

      <div className="card-value">
        ${financialMetrics.emergencyFund.toLocaleString()}
      </div>

      <div className="card-change positive">↑ 10% vs last year</div>
    </div>
  );
};