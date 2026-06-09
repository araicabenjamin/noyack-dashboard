import { ProfileDropdown } from "../components/profileDropdown/ProfileDropdown";
import { Bell } from "lucide-react";
import { useState } from "react";

export const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <div className="topbar">
      <div className="search-bar">
        <img src="/NOYACK_Favicon.png" alt="Noyack" className="search-logo" />

        <input
          type="text"
          placeholder="Ask me anything about your finances..."
          className="search-input"
        />
      </div>

      <div className="topbar-actions">
        <button className="bell-button">
          <Bell size={20} />
        </button>

        <div className="profile-menu">
          <button
            className="user-profile"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src="/Avatar.png" alt="Adam Mercer" className="avatar" />

            <div className="user-info">
              <span className="user-name">Adam Mercer</span>
              <span className="user-role">Individual</span>
            </div>
          </button>

          {isDropdownOpen && <ProfileDropdown />}
          
        </div>
      </div>
    </div>
  );
};
