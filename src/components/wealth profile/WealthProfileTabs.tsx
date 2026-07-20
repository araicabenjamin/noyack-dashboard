import {
  User,
  DollarSign,
  TrendingUp,
  CreditCard,
  Receipt,
  Shield,
} from "lucide-react";


export function WealthProfileTabs() {
  return (
    <div className="wealth-profile-tabs">

  <button className="profile-tab active">
    <User size={18} />
    <span>Basic Info</span>
  </button>

  <button className="profile-tab">
    <DollarSign size={18} />
    <span>Income</span>
  </button>

  <button className="profile-tab">
    <TrendingUp size={18} />
    <span>Assets</span>
  </button>

  <button className="profile-tab">
    <CreditCard size={18} />
    <span>Debt</span>
  </button>

  <button className="profile-tab">
    <Receipt size={18} />
    <span>Expenses</span>
  </button>

  <button className="profile-tab">
    <Shield size={18} />
    <span>Emergency Fund</span>
  </button>

</div>

  );
}