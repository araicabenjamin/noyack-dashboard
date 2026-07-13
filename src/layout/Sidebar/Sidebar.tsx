import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import {
  LayoutDashboard,
  Wrench,
  Calendar,
  GraduationCap,
  BookOpen,
  User,
  LifeBuoy,
  LogOut,
} from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="logo">
        <img src="/NOYACK Logo.png" alt="Noyack logo" />
      </NavLink>

      <nav className="sidebar-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <LayoutDashboard />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/tools"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <Wrench />
          <span>Tools</span>
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <Calendar />
          <span>Events</span>
        </NavLink>

        <NavLink
          to="/library"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <BookOpen />
          <span>Library</span>
        </NavLink>


        <NavLink
          to="/academy"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <GraduationCap />
          <span>Academy</span>
        </NavLink>
        

        <NavLink
          to="/wealth-profile"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <User />
          <span>Wealth Profile</span>
        </NavLink>

        <div className="sidebar-footer">
          <NavLink
            to="/support"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
          >
            <LifeBuoy />
            <span>Support</span>
          </NavLink>

          <div className="sidebar-item">
            <LogOut />
            <span>Log out</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};
