import "./ProfileDropdown.css";
import {
  User,
  Settings,
  Bell,
  MessageCircle,
  CircleHelp,
  LogOut,
  ChevronRight,
} from "lucide-react";

export const ProfileDropdown = () => {
  return (
    <div className="profile-dropdown">

      <div className="dropdown-user">
        <img
          src="/Avatar.png"
          alt="Adam Mercer"
          className="dropdown-avatar"
        />

        <div>
          <h4>Adam Mercer</h4>
          <p>Individual Investor</p>
        </div>
      </div>

      <div className="dropdown-divider" />

      <button className="dropdown-item">
        <User size={18} />
        <span>Wealth Profile</span>
        <ChevronRight size={16} />
      </button>

      <button className="dropdown-item">
        <Settings size={18} />
        <span>Account Settings</span>
        <ChevronRight size={16} />
      </button>

      <button className="dropdown-item">
        <Bell size={18} />
        <span>Notifications</span>
        <ChevronRight size={16} />
      </button>

      <div className="dropdown-divider" />

      <button className="dropdown-item">
        <MessageCircle size={18} />
        <span>Contact Advisor</span>
        <ChevronRight size={16} />
      </button>

      <button className="dropdown-item">
        <CircleHelp size={18} />
        <span>Help Center</span>
        <ChevronRight size={16} />
      </button>

      <div className="dropdown-divider" />

      <button className="dropdown-item signout">
        <LogOut size={18} />
        <span>Sign Out</span>
      </button>

    </div>
  );
};