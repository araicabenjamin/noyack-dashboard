import "./Insights.css";

export function InsightsCard() {
  return (
    <div className="card insights-card">
      <div className="insights-header">
        <h3 className="card-title">Insights</h3>
        <span className="status">On Track</span>
      </div>

      <div className="insights-body">
        <div className="insights-left">
          <p className="insight-text">
            Increase your monthly contribution by $200 to boost your retirement
            savings by $279,000
          </p>

          <button className="insight-button">Calculate</button>
        </div>

        <div className="insights-illustration">
          <img src="/Arrow-Graph.png" alt="Graph Illustration" />
        </div>
      </div>
    </div>
  );
}
