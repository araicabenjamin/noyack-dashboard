import { Brain } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const data = [
  {
    name: "score",
    value: 742,
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

        <h3 className="card-semibold">Wealth IQ Score</h3>
      </div>

      <div className="wealth-iq-chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="82%"
            outerRadius="100%"
            startAngle={90}
            endAngle={-270}
            barSize={14}
          >
            <defs>
              <linearGradient
                id="wealthGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="var(--brand-blue)" />

                <stop offset="100%" stopColor="var(--brand-teal)" />
              </linearGradient>
            </defs>

            <PolarAngleAxis type="number" domain={[0, 1000]} tick={false} />

            <RadialBar
              dataKey="value"
              background={{ fill: "#E5E7EB" }}
              fill="url(#wealthGradient)"
              cornerRadius={12}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="wealth-iq-center">
          <div className="wealth-iq-score">742</div>

          <div className="wealth-iq-rank">Top 18%</div>

          <div className="wealth-iq-members">of Noyack members</div>
        </div>
      </div>

      <button className="text-button wealth-iq-button">
        Take Assessment →
      </button>
    </div>
  );
}
