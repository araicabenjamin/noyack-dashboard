import { DollarSign } from "lucide-react";
import { getCashAvailable } from "../../../data/financialCalculations";
import "./CashAvailableCard.css";

const cashAvailable = getCashAvailable();

export const CashAvailableCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-wrapper">
          <DollarSign className="card-icon" size={20} color="#0067A7" />
        </div>
        <h3 className="card-title">Cash Available</h3>
      </div>

      <div className="value-lg">${cashAvailable.toLocaleString()}</div>

      <p className="card-change">
        <span className="card-change negative">↓ 8%</span>
        <span className="card-change label"> vs last year</span>
      </p>
    </div>
  );
};


