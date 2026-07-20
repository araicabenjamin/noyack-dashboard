import {
  Users,
  Pencil,
  CheckCircle2,
} from "lucide-react";

export function BasicInfoCard() {
  return (
    <div className="basic-info-card">

      <div className="basic-info-header">

        <div className="basic-info-header-left">

          <div className="basic-info-icon">
            <Users size={26} />
          </div>

          <div>
            <h3 className="card-semibold">
              Basic Information
            </h3>

            <p className="helper-regular">
              Your personal and household details
            </p>
          </div>

        </div>

        <button className="edit-profile-link">
          <Pencil size={16} />
          Edit Profile
        </button>

      </div>

      <div className="basic-info-content">
<div className="basic-info-progress">

  <div className="basic-info-ring">

    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
    >
      <defs>
        <linearGradient
          id="basicInfoGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="var(--brand-blue)"
          />

          <stop
            offset="100%"
            stopColor="var(--brand-teal)"
          />
        </linearGradient>
      </defs>

      <circle
        cx="90"
        cy="90"
        r="70"
        fill="none"
        stroke="#edf2f7"
        strokeWidth="16"
      />

      <circle
        cx="90"
        cy="90"
        r="70"
        fill="none"
        stroke="url(#basicInfoGradient)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray="351.86 439.82"
        transform="rotate(-90 90 90)"
      />
    </svg>

    <div className="basic-info-ring-inner">
      <span>80%</span>
      <small>Complete</small>
    </div>

  </div>

</div>

        <div className="info-column">

          <h4>Information on file</h4>

          <ul className="info-present">

            <li>
              <CheckCircle2 size={18} />
              Name
            </li>

            <li>
              <CheckCircle2 size={18} />
              Marital Status
            </li>

            <li>
              <CheckCircle2 size={18} />
              Dependents
            </li>

          </ul>

        </div>

        <div className="info-column">

          <h4>Information missing</h4>

          <ul className="info-missing">

            <li>Date of Birth</li>
            <li>Employment Status</li>
            <li>Education</li>

          </ul>

        </div>

      </div>

    </div>
  );
}