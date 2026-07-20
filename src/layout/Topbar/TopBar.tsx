import { ProfileDropdown } from "../../components/profile dropdown/ProfileDropdown";
import { Bell, Menu } from "lucide-react";
import { useState } from "react";
import "./TopBar.css";

type TopBarProps = {
  onOpenCopilot: () => void;
};

export const TopBar = ({ onOpenCopilot }: TopBarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="topbar">
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu size={20} />
      </button>

      {/* Search Bar */}
      <div className="search-bar" onClick={onOpenCopilot}>
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
