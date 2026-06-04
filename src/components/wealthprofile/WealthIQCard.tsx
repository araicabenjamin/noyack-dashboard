import { Brain } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "score",
    value: 100,
    fill: "url(#wealthGradient)",
  },
];

export function WealthIQCard() {
  return (
    <div className="profile-card wealth-iq-card">
      <div className="profile-card-header">
        <div className="profile-card-icon">
          <Brain size={18} />
        </div>

        <h3 className="card-semibold">
          Wealth IQ Score
        </h3>
      </div>

      <div className="wealth-iq-chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="82%"
            outerRadius="100%"
            startAngle={90}
            endAngle={-270}
            barSize={14}
            data={data}
          >
            <defs>
              <linearGradient
                id="wealthGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#0067A7"
                />
                <stop
                  offset="100%"
                  stopColor="#01ABAD"
                />
              </linearGradient>
            </defs>

            <RadialBar
              background
              dataKey="value"
              fill="url(#wealthGradient)"
              cornerRadius={12}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="wealth-iq-center">
          <div className="wealth-iq-score">
            742
          </div>

          <div className="wealth-iq-rank">
            Top 18%
          </div>

          <div className="wealth-iq-members">
            of Noyack members
          </div>
        </div>
      </div>

      <button className="text-button wealth-iq-button">
        Take Assessment →
      </button>
    </div>
  );
}