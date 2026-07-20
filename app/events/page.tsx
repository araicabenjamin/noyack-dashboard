"use client";

import { useState } from "react";
import "./events.css";

import {
  Search,
  Filter,
  Calendar,
  Clock3,
  Globe,
  MapPin,
  ChevronRight,
  Bookmark,
  Users,
} from "lucide-react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  month: string;
  time: string;
  location: string;
  type: string;
  isVirtual: boolean;
}

const eventTypes = [
  "All",
  "Webinars",
  "Workshops",
  "Networking",
  "Live Q&A",
  "In-Person",
];

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Market Outlook 2024: What to Expect",
    description:
      "Join our CIO as we break down key market trends and opportunities.",
    month: "MAY",
    date: "24",
    time: "7:00 PM - 8:00 PM EST",
    location: "Virtual Event",
    type: "Webinars",
    isVirtual: true,
  },
  {
    id: 2,
    title: "Retirement Planning Workshop",
    description: "Practical strategies to help you build a secure retirement.",
    month: "MAY",
    date: "30",
    time: "6:30 PM - 8:00 PM EST",
    location: "New York, NY",
    type: "Workshops",
    isVirtual: false,
  },
  {
    id: 3,
    title: "Alternative Investments Masterclass",
    description: "Explore the role of alternatives in a diversified portfolio.",
    month: "JUN",
    date: "08",
    time: "7:00 PM - 8:30 PM EST",
    location: "Virtual Event",
    type: "Webinars",
    isVirtual: true,
  },
  {
    id: 4,
    title: "Tax-Smart Investing Strategies",
    description: "Learn how to minimize taxes and maximize investment returns.",
    month: "JUN",
    date: "15",
    time: "1:00 PM - 2:00 PM EST",
    location: "Virtual Event",
    type: "Webinars",
    isVirtual: true,
  },
];

export default function Events() {
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("upcoming");

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesType = selectedType === "All" || event.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="events-page">
      {/* Header */}

      <div className="events-header">
        <h1 className="page-semibold">Upcoming Events</h1>

        <p className="helper-regular">
          Join expert-led webinars, workshops, and networking events.
          <br />
          Learn from industry professionals and expand your financial knowledge.
        </p>
      </div>

      {/* Search */}

      <div className="events-search-container">
        <div className="events-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search events, topics or speakers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="filter-btn">
          <Filter size={18} />
          All Types
        </button>

        <button className="filter-btn">
          <Calendar size={18} />
          Date
        </button>
      </div>

      {/* Categories */}

      <div className="event-categories">
        {eventTypes.map((type) => (
          <button
            key={type}
            className={`event-pill ${selectedType === type ? "active" : ""}`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Featured */}

      <div className="featured-event">
        <div className="featured-date">
          <span>JUN</span>
          <strong>20</strong>
          <small>THU</small>
        </div>

        <div className="featured-content">
          <span className="featured-badge">FEATURED</span>

          <h2>Alternative Investments Summit 2024</h2>

          <p>
            A deep dive into private markets, real assets, and alternative
            strategies with industry leaders.
          </p>

          <div className="featured-meta">
            <span>
              <Clock3 size={16} />
              7:00 PM - 9:00 PM EST
            </span>

            <span>
              <Globe size={16} />
              Virtual Event
            </span>

            <span>
              <Users size={16} />
              Panel Discussion
            </span>
          </div>
        </div>

        <div className="featured-right">
          <div className="featured-speakers">
            <div className="speaker-avatar">JM</div>

            <div className="speaker-avatar">DC</div>

            <div className="speaker-avatar">MP</div>

            <div className="speaker-count">+3</div>
          </div>

          <button className="register-btn">
            Register Now
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      {/* Tabs */}

      <div className="events-tabs">
        <button
          className={`tab ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Events
          <span>5</span>
        </button>

        <button
          className={`tab ${activeTab === "past" ? "active" : ""}`}
          onClick={() => setActiveTab("past")}
        >
          Past Events
          <span>8</span>
        </button>
      </div>

      {/* Event Grid */}

      <div className="events-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <button className="bookmark-btn">
              <Bookmark size={18} />
            </button>

            <div className="event-date-box">
              <span>{event.month}</span>
              <strong>{event.date}</strong>
            </div>

            <h3>{event.title}</h3>

            <p>{event.description}</p>

            <div className="event-details">
              <div>
                <Clock3 size={15} />
                {event.time}
              </div>

              <div>
                {event.isVirtual ? <Globe size={15} /> : <MapPin size={15} />}

                {event.location}
              </div>
            </div>

            <div className="event-footer">
              <span className="event-type">{event.type}</span>

              <button className="card-arrow">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
