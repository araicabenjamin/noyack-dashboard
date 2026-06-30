import {
  Lightbulb,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";

export function ProfileInsightsCard() {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <div className="profile-card-icon">
          <Lightbulb size={18} />
        </div>

        <h3 className="card-semibold">
          Profile Insights
        </h3>
      </div>

      <div className="insights-list">

        <div className="insight-item">
          <div className="insight-icon success">
            <CircleCheck size={18} />
          </div>

          <div className="insight-content">
            <h4>Income information added</h4>
            <p>Nice! Your income is on file.</p>
          </div>
        </div>

        <div className="insight-item">
          <div className="insight-icon warning">
            <TriangleAlert size={18} />
          </div>

          <div className="insight-content">
            <h4>Emergency fund not set</h4>
            <p>Add your emergency fund details.</p>
          </div>
        </div>

        <div className="insight-item">
          <div className="insight-icon warning">
            <TriangleAlert size={18} />
          </div>

          <div className="insight-content">
            <h4>Retirement accounts missing</h4>
            <p>Add retirement accounts to improve accuracy.</p>
          </div>
        </div>

        <div className="insight-item">
          <div className="insight-icon success">
            <CircleCheck size={18} />
          </div>

          <div className="insight-content">
            <h4>Debt profile added</h4>
            <p>Your debt information is up to date.</p>
          </div>
        </div>

      </div>

      <button className="text-button">
        View All Recommendations →
      </button>
    </div>
  );
}