"use client";
import { useState } from "react";
import "./academy.css";

import { Play, Search } from "lucide-react";

interface Video {
  id: number;
  title: string;
  tag: string;
  tagColor: "investing" | "mortgages" | "planning";
  duration: string;
  instructor: string;
  avatarUrl: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Roth vs traditional: which wins long-term",
    tag: "Investing",
    tagColor: "investing",
    duration: "12 min",
    instructor: "Emily Chen, RA",
    avatarUrl: "/Avatar 1.png",
    thumbnail: "/Thumbnail 1.png",
  },
  {
    id: 2,
    title: "Roth vs traditional: which wins long-term",
    tag: "Mortgages",
    tagColor: "mortgages",
    duration: "9 min",
    instructor: "Maya Wiliams, CFP®",
    avatarUrl: "/Avatar 2.png",
    thumbnail: "/Thumbnail 2.png",
  },
  {
    id: 3,
    title: "Trusts explained: do you actually need one",
    tag: "Financial Planning",
    tagColor: "planning",
    duration: "15 min",
    instructor: "David Myers, RA",
    avatarUrl: "/Avatar 3.png",
    thumbnail: "/Thumbnail 3.png",
  },
  {
    id: 4,
    title: "Private equity for individual investors",
    tag: "Investing",
    tagColor: "investing",
    duration: "5 min",
    instructor: "Michael Carter, CFA®",
    avatarUrl: "/Avatar 4.png",
    thumbnail: "/Thumbnail 4.png",
  },
  {
    id: 5,
    title: "What is dollar-cost averaging into an ETF",
    tag: "Investing",
    tagColor: "investing",
    duration: "11 min",
    instructor: "Sarah Williams, CFP®",
    avatarUrl: "/Avatar 5.png",
    thumbnail: "/Thumbnail 5.png",
  },
  {
    id: 6,
    title: "Municipal bonds and tax-free income",
    tag: "Investing",
    tagColor: "investing",
    duration: "9 min",
    instructor: "Rachel Thompson, CFP®",
    avatarUrl: "/Avatar 5.png",
    thumbnail: "/Thumbnail 6.png",
  },
];

const categories = [
  "All Topics",
  "Tax Optimization",
  "Mortgages",
  "Retirement",
  "Estate Planning",
];

export default function Academy() {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Continue-watching progress: 8 of 14 min
  const progressPercent = (8 / 14) * 100;

  return (
    <div className="academy-page">
      {/* Header */}
      <div className="academy-header">
        <h1 className="page-semibold">Academy</h1>
        <p className="helper-regular">
          Short video classes on the topics that matter to your wealth.
        </p>
      </div>

      {/* Search */}
      <div className="academy-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search videos or topics"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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

      {/* Grid */}
      <div className="videos-grid">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <div className={`video-thumbnail ${video.tagColor}`}>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="video-thumbnail-image"
              />

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
