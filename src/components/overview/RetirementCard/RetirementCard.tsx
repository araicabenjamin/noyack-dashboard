import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";
import "./RetirementCard.css";
import { retirementData } from "../../../data/retirementData";

const lastpoint = retirementData[retirementData.length - 1];
const formattedValue = `$${(lastpoint.value / 1000000).toFixed(2)}M`;
const formattedFullValue = `$${lastpoint.value.toLocaleString()}`;




export function RetirementCard() {
  return (
    <div className="retirement-card">

      {/* Header */}
      <div className="retirement-header">
        <h3>Retirement Projection</h3>
        <p>Your projected savings at retirement age 65</p>
      </div>


      {/* Summary */}
      <div className="retirement-summary">
        <h2>{formattedFullValue}</h2>
        <span className="badge">On Track</span>
      </div>


      {/* (RECHARTS) */}
      <div className="retirement-chart">
        <div className="chart-endpoint-badge">{formattedValue}</div>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={retirementData}
            margin={{
              top: 5,
              right: 5,
              left: 10,
              bottom: 0,
            }}
          >
            <Area
              type="monotone"
              dataKey="value"
              stroke="#01ABAD"
              strokeWidth={4}
              fill="#DFF6F5"
            />

            <XAxis
              dataKey="year"
              interval={0}
              axisLine={false}
              tickLine={false}
              padding={{ left: 15, right: 15 }}
              tick={{
                fontSize: 12,
                fontFamily: "Jeko",
                fontWeight: 500,
                fill: "#1A1A1A",
              }}
            />

            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>


      {/* Stats */}
      <div className="retirement-stats">
        <div className="stat">
          <p>Total Contributions</p>
          <h4>$360,000</h4>
        </div>

        <div className="stat">
          <p>Investment Growth</p>
          <h4>$843,000</h4>
        </div>

        <div className="stat">
          <p>Rate of Return</p>
          <h4>7%</h4>
        </div>

        <div className="stat">
          <p>Inflation Rate</p>
          <h4>2.5%</h4>
        </div>
      </div>
    </div>
  );
}
