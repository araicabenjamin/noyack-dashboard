import { User } from "lucide-react";

export function ProfileCompletionCard() {
  return (
    <div className="profile-card profile-completion-card">

      <div className="profile-card-header">
        <div className="profile-card-icon">
          <User size={18} />
        </div>

        <h3 className="card-semibold">
          Profile Completion
        </h3>
      </div>

      <div className="completion-content">

        <div className="completion-value">
          62%
        </div>

        <div className="completion-label">
          Complete
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "62%" }}
          />
        </div>

        <div className="completion-warning">
          3 sections need attention
        </div>

      </div>

      <button className="completion-button">
        View Missing Items →
      </button>

    </div>
  );
}