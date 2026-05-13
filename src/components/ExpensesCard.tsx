import { DollarSign } from "lucide-react";

export const ExpensesCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-wrapper">
          <DollarSign className="card-icon" size={20} color="#0067A7"  />
          
        </div>
        <h3 className="card-title">Expenses</h3>
      </div>

      <div className="card-value">$2,561</div>

      <div className="card-change negative">↓ 8% vs last year</div>
    </div>
  );
};
