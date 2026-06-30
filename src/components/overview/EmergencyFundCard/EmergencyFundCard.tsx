import { DollarSign } from "lucide-react";
import { getEmergencyFund } from "../../../data/financialCalculations";

export const EmergencyFundCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-wrapper">
          <DollarSign className="card-icon" size={20} color="#0067A7" />
        </div>

        <h3 className="card-title">Emergency Fund</h3>
      </div>

      <div className="value-lg">${getEmergencyFund().toLocaleString()}</div>

      <p className="card-change">
        <span className="card-change positive">↑ 10%</span>
        <span className="card-change label"> vs last year</span>
      </p>

    </div>
  );
};
