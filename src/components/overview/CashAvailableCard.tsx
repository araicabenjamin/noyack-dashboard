import { DollarSign } from "lucide-react";
import { getCashAvailable } from "../../data/financialCalculations";

const cashAvailable = getCashAvailable();

export const CashAvailableCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-wrapper">
          <DollarSign className="card-icon" size={20} color="#0067A7"  />
          
        </div>
        <h3 className="card-title">Cash Available</h3>
      </div>

      <div className="value-lg">${cashAvailable.toLocaleString()}</div>

      <div className="card-change negative">↓ 8% vs last year</div>
    </div>
  );
};
