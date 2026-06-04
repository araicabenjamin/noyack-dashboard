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