import { useState } from "react";
import "./Academy.css";

import { Search, Play } from "lucide-react";

interface Video {
  id: number;
  title: string;
  tag: string;
  tagColor: "investing" | "retirement" | "estate" | "planning";
  duration: string;
  instructor: string;
  avatarUrl: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "How refinancing works in a high-rate market",
    tag: "Investing",
    tagColor: "investing",
    duration: "12 min",
    instructor: "David Kim, RA",
    avatarUrl: "https://i.pravatar.cc/40?img=12",
  },
  {
    id: 2,
    title: "Roth vs traditional: which wins long-term",
    tag: "Retirement",
    tagColor: "retirement",
    duration: "9 min",
    instructor: "Sarah Chen, RA",
    avatarUrl: "https://i.pravatar.cc/40?img=45",
  },
  {
    id: 3,
    title: "Trusts explained: do you actually need one",
    tag: "Estate planning",
    tagColor: "estate",
    duration: "15 min",
    instructor: "Marcus Lee, RA",
    avatarUrl: "https://i.pravatar.cc/40?img=33",
  },
  {
    id: 4,
    title: "Building a simple monthly budget that sticks",
    tag: "Financial Planning",
    tagColor: "planning",
    duration: "6 min",
    instructor: "Sarah Chen, RA",
    avatarUrl: "https://i.pravatar.cc/40?img=45",
  },
  {
    id: 5,
    title: "Understanding bonds and fixed income basics",
    tag: "Investing",
    tagColor: "investing",
    duration: "2 min",
    instructor: "David Kim, RA",
    avatarUrl: "https://i.pravatar.cc/40?img=12",
  },
  {
    id: 6,
    title: "Catch-up contributions after age 50",
    tag: "Retirement",
    tagColor: "retirement",
    duration: "11 min",
    instructor: "Marcus Lee, RA",
    avatarUrl: "https://i.pravatar.cc/40?img=33",
  },
];

const categories = [
  "All Topics",
  "Tax Optimization",
  "Mortgages",
  "Retirement",
  "Estate Planning",
];

export function Academy() {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Continue-watching progress: 8 of 14 min
  const progressPercent = (8 / 14) * 100;

  return (
    <div className="academy-page">
      {/* Header */}
      <div className="academy-header">
        <h1 className="page-semibold">Academy</h1>
        <p className="helper-regular">
          Learn from our registered advisors. Short video classes on the
          topics that matter to your wealth.
        </p>
      </div>

      {/* Continue watching */}
      <div className="continue-watching">
        <div className="continue-watching-info">
          <span className="badge">Continue watching</span>
          <h2>Tax optimization strategies for high earners</h2>
          <p>with Sarah Chen, RA &nbsp;·&nbsp; 8 of 14 min left</p>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <button className="play-btn" aria-label="Resume video">
          <Play size={22} fill="currentColor" />
        </button>
      </div>

      {/* Category filters */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search (kept for usability, not in the screenshot but useful once the library grows) */}
      <div className="academy-search">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search classes or advisors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid */}
      <div className="videos-grid">
        {filteredVideos.map((video) => (
          <div className="video-card" key={video.id}>
            <div className={`video-thumbnail ${video.tagColor}`}>
              <div className="play-overlay">
                <Play size={20} fill="currentColor" />
              </div>
              <span className="duration-badge">{video.duration}</span>
            </div>

            <div className="video-info">
              <span className={`tag ${video.tagColor}`}>{video.tag}</span>
              <h3>{video.title}</h3>
              <div className="instructor">
                <img
                  className="instructor-avatar"
                  src={video.avatarUrl}
                  alt={video.instructor}
                />
                <span>{video.instructor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
