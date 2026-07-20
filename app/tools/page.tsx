"use client";
import { useState } from "react";

import "./tools.css";
import {
  calculateBuyingCost,
  calculateRentingCost,
} from "../../util/Financial";
import type { FinancialData } from "../../types/Finance";

import {
  Home,
  Landmark,
  CreditCard,
  Receipt,
  Info,
  Lightbulb,
  Calculator,
} from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

export default function Tools() {
  const [inputs, setInputs] = useState<FinancialData>({
    annualIncome: 100000,
    monthlyBudget: 2500,
    homePrice: 450000,
    downPayment: 20,
    interestRate: 6.5,
    yearsStaying: 10,
    mortgageTerm: 30,
  });

  const totalRentingCost = calculateRentingCost(inputs);
  const totalBuyingCost = calculateBuyingCost(inputs);

  const chartData = [
    {
      year: "Now",
      renting: totalRentingCost,
      buying: 80000,
    },

    {
      year: "2 Years",
      renting: 180000,
      buying: 140000,
    },

    {
      year: "4 Years",
      renting: 260000,
      buying: 220000,
    },

    {
      year: "6 Years",
      renting: 340000,
      buying: 350000,
    },

    {
      year: "8 Years",
      renting: 400000,
      buying: 470000,
    },

    {
      year: "10 Years",
      renting: 440000,
      buying: 560000,
    },
  ];

  return (
    <div className="tools-page">
      <div className="tools-header">
        <h1 className="page-semibold">Financial Planning</h1>

        <p className="helper-regular">
          Model scenarios and make smarter financial decisions.
        </p>
      </div>

      <div className="tool-tabs">
        <button className="tool-tab primary-medium active">
          <Home className="card-icon" size={20} color="var(--brand-blue)" />
          Rent vs Buy 
        </button>

        <button className="tool-tab primary-medium">
          <Landmark
            className="card-icon"
            size={20}
            
          />
          Retirement Calculator
        </button>

        <button className="tool-tab primary-medium">
          <CreditCard
            className="card-icon"
            size={20}
            
          />
          Debt Payoff 
        </button>

        <button className="tool-tab primary-medium">
          <Receipt
            className="card-icon"
            size={20}
            
          />
          Tax Optimization
        </button>

        <button className="tool-tab primary-medium">
          <Calculator
            className="card-icon"
            size={20}
            
          />
          Mortgage Calculator
        </button>




      </div>

      <div className="tools-grid">
        <div className="tools-panel">
          <div className="panel-header">
            <h2 className="card-bold">Your Inputs</h2>

            <p className="helper-regular">
              Adjust the values below to model different scenarios.
            </p>
          </div>

          <div className="input-section">
            <div className="body-semibold">Your Finances</div>

            <div className="input-group">
              <label className="body-regular">Annual Income</label>

              <input
                className="primary-regular"
                type="number"
                value={inputs.annualIncome}
                onChange={(e) =>
                  setInputs({ ...inputs, annualIncome: Number(e.target.value) })
                }
              />
            </div>

            <div className="input-group">
              <label className="body-regular">Monthly Budget</label>

              <input
                className="primary-regular"
                type="number"
                value={inputs.monthlyBudget}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    monthlyBudget: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="input-group">
              <label className="body-regular">Target Home Price</label>

              <input
                className="primary-regular"
                type="number"
                value={inputs.homePrice}
                onChange={(e) =>
                  setInputs({ ...inputs, homePrice: Number(e.target.value) })
                }
              />
            </div>
          </div>

          <div className="input-section">
            <div className="body-semibold">Assumptions</div>

            <div className="input-group">
              <label className="primary-medium">Down Payment (%)</label>

              <input
                className="primary-regular"
                type="number"
                placeholder="20%"
                value={inputs.downPayment}
                onChange={(e) =>
                  setInputs({ ...inputs, downPayment: Number(e.target.value) })
                }
              />
            </div>

            <div className="input-group">
              <label className="primary-medium">Interest Rate (%)</label>

              <input
                className="primary-regular"
                type="number"
                placeholder="6.5%"
                value={inputs.interestRate}
                onChange={(e) =>
                  setInputs({ ...inputs, interestRate: Number(e.target.value) })
                }
              />
            </div>

            <div className="input-group">
              <label className="primary-medium">Mortgage Term (Years)</label>

              <select
                value={inputs.mortgageTerm}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    mortgageTerm: Number(e.target.value),
                  })
                }
              >
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
                <option value={30}>30 Years</option>
              </select>
            </div>

            <div className="input-group">
              <label className="primary-medium">Years Staying</label>

              <input
                className="primary-regular"
                type="number"
                placeholder="10 years"
                value={inputs.yearsStaying}
                onChange={(e) =>
                  setInputs({ ...inputs, yearsStaying: Number(e.target.value) })
                }
              />
            </div>

            <div className="insight-card">
              <p className="insight-text helper-medium">
                <Info className="card-icon" size={20} color="#0067A7" />
                These inputs are based on your financial profile. Feel free to
                adjust any values.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN*/}
        <div className="results-panel">
          <div className="panel-header">
            <h2 className="card-bold">Results</h2>
            <p className="helper-regular">Cost comparison over 10 years</p>
          </div>

          {/* RESULTS TABLE */}

          <div className="results-table">
            <div className="results-table-header body-semibold">
              <span>Option</span>
              <span>Total Cost</span>
              <span>Difference vs Renting</span>
            </div>

            <div className="results-table-row primary-medium">
              <div className="result-option">
                <div className="result-dot renting"></div>
                Renting
              </div>

              <span>{`$${totalRentingCost.toLocaleString()}`}</span>

              <span>-</span>
            </div>

            <div className="results-table-row primary-medium">
              <div className="result-option">
                <div className="result-dot buying"></div>
                Buying
              </div>

              <span>{`$${totalBuyingCost.toLocaleString()}`}</span>

              <span className="negative-text">+$42,000</span>
            </div>
          </div>

          {/* BREAKDOWN */}

          <div className="breakdown-section">
            <div className="breakdown-header">
              <h3 className="body-semibold">Monthly Cost Breakdown</h3>
            </div>

            <div className="breakdown-grid">
              <div className="breakdown-card renting">
                <span className="helper-medium" style={{ color: "var(--brand-blue)" }}>
                  Renting
                </span>

                <div className="value-md">$2,000</div>

                <p className="helper-medium" style={{ color: "var(--brand-blue)" }}>
                  Your monthly rent
                </p>
              </div>

              <div className="breakdown-card buying">
                <span className="helper-medium"  style={{ color: "var(--brand-teal)" }}>
                  Buying
                </span>

                <div className="value-md">$2,350</div>

                <p className="helper-medium" style={{ color: "var(--brand-teal)" }}>
                  Monthly ownership cost
                </p>
              </div>
            </div>
          </div>

          {/* CHART */}

          <div className="chart-section">
            <div className="chart-header">
              <h3 className="body-semibold">Total cost over time</h3>

              <button className="chart-filter primary-medium">
                Over 10 years
              </button>
            </div>

            <div className="chart-placeholder helper-medium">
              {/* RECHARTS */}
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="year" axisLine={false} tickLine={false} />

                  <YAxis
                    width={60}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}
                    tick={{
                      textAnchor: "start",
                      fill: "#6B7280",
                      dx: -55,
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="renting"
                    stroke="#0067A7"
                    strokeWidth={2}
                    dot={{
                      fill: "#0067A7",
                      stroke: "#0067A7",
                      strokeWidth: 2,
                    }}
                    activeDot={{
                      r: 6,
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="buying"
                    stroke="#01ABAD"
                    strokeWidth={2}
                    dot={{
                      fill: "#01ABAD",
                      stroke: "#01ABAD",
                      strokeWidth: 2,
                    }}
                    activeDot={{
                      r: 6,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* INSIGHT */}

          <div className="insight-card">
            <p className="insight-text helper-medium">
              <Lightbulb className="lightbulb-icon" size={20} color="#0067A7" />
              Break-even is the point where buying becomes less expensive than
              renting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
