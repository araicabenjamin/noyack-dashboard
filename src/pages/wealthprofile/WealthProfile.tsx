import "./WealthProfile.css";

import {
  User,
  DollarSign,
  TrendingUp,
  CreditCard,
  ReceiptText,
  Shield,
  Pencil,
} from "lucide-react";

export const WealthProfile = () => {
  return (
    <div className="wealthProfilePage">
      <div className="wealthProfileHeader">
        <h1 className="page-semibold">Wealth Profile</h1>

        <p className="helper-regular">
          Manage your financial profile and account information.
        </p>
      </div>

      <div className="wealthProfileTabs">
        <a href="#basic-info" className="wealthTab active">
          <User size={18} />
          <span>Basic Info</span>
        </a>

        <a href="#income" className="wealthTab">
          <DollarSign size={18} />
          <span>Income</span>
        </a>

        <a href="#assets" className="wealthTab">
          <TrendingUp size={18} />
          <span>Assets</span>
        </a>

        <a href="#debt" className="wealthTab">
          <CreditCard size={18} />
          <span>Debt</span>
        </a>

        <a href="#expenses" className="wealthTab">
          <ReceiptText size={18} />
          <span>Expenses</span>
        </a>

        <a href="#emergency-fund" className="wealthTab">
          <Shield size={18} />
          <span>Emergency Fund</span>
        </a>
      </div>

      {/* BASIC INFO */}

      <section id="basic-info" className="wealthCard wealthSection">
        <div className="wealthCardHeader">
          <div className="wealthCardTitle">
            <div className="wealthCardIcon">
              <User size={24} />
            </div>

            <div>
              <h2 className="card-semibold">Basic Information</h2>

              <p className="helper-regular">
                Personal and household details
              </p>
            </div>
          </div>

          <button className="editButton">
            <Pencil size={16} />
            Edit
          </button>
        </div>

        <div className="wealthGrid">
          <div className="wealthField">
            <label>Full Name</label>
            <p>Adam Mercer</p>
          </div>

          <div className="wealthField">
            <label>Marital Status</label>
            <p>Single</p>
          </div>

          <div className="wealthField">
            <label>Date of Birth</label>
            <p>—</p>
          </div>

          <div className="wealthField">
            <label>Dependents</label>
            <p>0</p>
          </div>

          <div className="wealthField">
            <label>Employment Status</label>
            <p>—</p>
          </div>

          <div className="wealthField">
            <label>Education</label>
            <p>—</p>
          </div>
        </div>
      </section>

      {/* INCOME */}

      <section id="income" className="wealthCard wealthSection">
        <div className="wealthCardHeader">
          <div className="wealthCardTitle">
            <div className="wealthCardIcon">
              <DollarSign size={24} />
            </div>

            <div>
              <h2 className="card-semibold">Income</h2>

              <p className="helper-regular">
                Employment and income details
              </p>
            </div>
          </div>

          <button className="editButton">
            <Pencil size={16} />
            Edit
          </button>
        </div>

        <div className="wealthGrid">
          <div className="wealthField">
            <label>Annual Income</label>
            <p>$85,000</p>
          </div>

          <div className="wealthField">
            <label>Bonus Income</label>
            <p>—</p>
          </div>

          <div className="wealthField">
            <label>Employment Type</label>
            <p>Full Time</p>
          </div>

          <div className="wealthField">
            <label>Other Income</label>
            <p>—</p>
          </div>
        </div>
      </section>

      {/* ASSETS */}

      <section id="assets" className="wealthCard wealthSection">
        <div className="wealthCardHeader">
          <div className="wealthCardTitle">
            <div className="wealthCardIcon">
              <TrendingUp size={24} />
            </div>

            <div>
              <h2 className="card-semibold">Assets</h2>

              <p className="helper-regular">
                Savings, investments, and property
              </p>
            </div>
          </div>

          <button className="editButton">
            <Pencil size={16} />
            Edit
          </button>
        </div>

        <div className="wealthGrid">
          <div className="wealthField">
            <label>Brokerage Accounts</label>
            <p>$30,000</p>
          </div>

          <div className="wealthField">
            <label>Retirement Accounts</label>
            <p>$15,000</p>
          </div>

          <div className="wealthField">
            <label>Savings</label>
            <p>$26,000</p>
          </div>

          <div className="wealthField">
            <label>Real Estate</label>
            <p>—</p>
          </div>
        </div>
      </section>

      {/* DEBT */}

      <section id="debt" className="wealthCard wealthSection">
        <div className="wealthCardHeader">
          <div className="wealthCardTitle">
            <div className="wealthCardIcon">
              <CreditCard size={24} />
            </div>

            <div>
              <h2 className="card-semibold">Debt</h2>

              <p className="helper-regular">
                Loans and liabilities
              </p>
            </div>
          </div>

          <button className="editButton">
            <Pencil size={16} />
            Edit
          </button>
        </div>

        <div className="wealthGrid">
          <div className="wealthField">
            <label>Credit Cards</label>
            <p>$0</p>
          </div>

          <div className="wealthField">
            <label>Auto Loans</label>
            <p>—</p>
          </div>

          <div className="wealthField">
            <label>Student Loans</label>
            <p>$0</p>
          </div>

          <div className="wealthField">
            <label>Other Debt</label>
            <p>—</p>
          </div>
        </div>
      </section>

      {/* EXPENSES */}

      <section id="expenses" className="wealthCard wealthSection">
        <div className="wealthCardHeader">
          <div className="wealthCardTitle">
            <div className="wealthCardIcon">
              <ReceiptText size={24} />
            </div>

            <div>
              <h2 className="card-semibold">Expenses</h2>

              <p className="helper-regular">
                Monthly spending
              </p>
            </div>
          </div>

          <button className="editButton">
            <Pencil size={16} />
            Edit
          </button>
        </div>

        <div className="wealthGrid">
          <div className="wealthField">
            <label>Monthly Expenses</label>
            <p>$3,200</p>
          </div>

          <div className="wealthField">
            <label>Top Categories</label>
            <p>Housing, Transportation, Food</p>
          </div>
        </div>
      </section>

      {/* EMERGENCY FUND */}

      <section id="emergency-fund" className="wealthCard wealthSection">
        <div className="wealthCardHeader">
          <div className="wealthCardTitle">
            <div className="wealthCardIcon">
              <Shield size={24} />
            </div>

            <div>
              <h2 className="card-semibold">Emergency Fund</h2>

              <p className="helper-regular">
                Savings and cash reserve
              </p>
            </div>
          </div>

          <button className="primaryButton">
            Set Up
          </button>
        </div>

        <div className="wealthGrid">
          <div className="wealthField">
            <label>Status</label>
            <p>Not yet configured</p>
          </div>

          <div className="wealthField">
            <label>Recommendation</label>
            <p>Maintain 3–6 months of expenses</p>
          </div>
        </div>
      </section>
    </div>
  );
};