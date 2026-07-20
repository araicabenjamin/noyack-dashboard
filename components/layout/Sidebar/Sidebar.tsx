"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/" className="logo">
        <img src="/NOYACK Logo.png" alt="Noyack logo" />
      </Link>

      <nav className="sidebar-nav">
        <Link
          href="/"
          className={`sidebar-item ${pathname === "/" ? "active" : ""}`}
        >
          <LayoutDashboard />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/tools"
          className={`sidebar-item ${pathname === "/tools" ? "active" : ""}`}
        >
          <Wrench />
          <span>Tools</span>
        </Link>

        <Link
          href="/events"
          className={`sidebar-item ${pathname === "/events" ? "active" : ""}`}
        >
          <Calendar />
          <span>Events</span>
        </Link>

        <Link
          href="/library"
          className={`sidebar-item ${pathname === "/library" ? "active" : ""}`}
        >
          <BookOpen />
          <span>Library</span>
        </Link>

        <Link
          href="/academy"
          className={`sidebar-item ${pathname === "/academy" ? "active" : ""}`}
        >
          <GraduationCap />
          <span>Academy</span>
        </Link>

        <Link
          href="/wealthprofile"
          className={`sidebar-item ${
            pathname === "/wealthprofile" ? "active" : ""
          }`}
        >
          <User />
          <span>Wealth Profile</span>
        </Link>

        <div className="sidebar-footer">
          <Link
            href="/support"
            className={`sidebar-item ${pathname === "/support" ? "active" : ""}`}
          >
            <LifeBuoy />
            <span>Support</span>
          </Link>

          <div className="sidebar-item">
            <LogOut />
            <span>Log out</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};