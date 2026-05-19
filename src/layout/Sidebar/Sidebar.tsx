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
      <div className="logo">
        <img src="/NOYACK Logo.png" alt="Noyack logo" />
      </div>

<nav className="sidebar-nav">
  <NavLink to="/" className="sidebar-item">
    <LayoutDashboard />
    <span>Dashboard</span>
  </NavLink>

  <NavLink to="/tools" className="sidebar-item">
    <Wrench />
    <span>Tools</span>
  </NavLink>

  <div className="sidebar-item">
    <Calendar />
    <span>Events</span>
  </div>

  <div className="sidebar-item">
    <GraduationCap />
    <span>Academy</span>
  </div>

  <div className="sidebar-item">
    <BookOpen />
    <span>Library</span>
  </div>

  <div className="sidebar-item">
    <User />
    <span>Wealth Profile</span>
  </div>

  <div className="sidebar-item">
    <LifeBuoy />
    <span>Support</span>
  </div>

  <div className="sidebar-item">
    <LogOut />
    <span>Log out</span>
  </div>
</nav>
    </aside>
  );
};
