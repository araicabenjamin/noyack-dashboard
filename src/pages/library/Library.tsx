import { useState } from "react";
import "./Library.css";

import {
  Search,
  TrendingUp,
  Target,
  Users,
  Umbrella,
  BadgeDollarSign,
  ShieldCheck,
  Landmark,
  PieChart,
  ChevronRight,
  ChevronLeft,
  MoreVertical,
} from "lucide-react";

interface Ebook {
  id: number;
  title: string;
  category: string;
  readTime: string;
  icon: React.ReactNode;
  tagColor: string;
}

const ebooks: Ebook[] = [
  {
    id: 1,
    title: "50 Years of Warren Buffett Lessons",
    category: "Investing",
    readTime: "18 min read",
    icon: <TrendingUp size={30} />,
    tagColor: "investing",
  },
  {
    id: 2,
    title: "Alts for All The Definitive Guide to Alternatives",
    category: "Investing",
    readTime: "24 min read",
    icon: <Landmark size={30} />,
    tagColor: "investing",
  },
  {
    id: 3,
    title: "Generating Impact Using Alternative Investments",
    category: "Investing",
    readTime: "22 min read",
    icon: <Target size={30} />,
    tagColor: "investing",
  },
  {
    id: 4,
    title: "Family Financial Planning Guide (Oct 2023)",
    category: "Financial Planning",
    readTime: "15 min read",
    icon: <Users size={30} />,
    tagColor: "planning",
  },
  {
    id: 5,
    title: "The Ultimate Retirement Planning Guide",
    category: "Retirement",
    readTime: "20 min read",
    icon: <Umbrella size={30} />,
    tagColor: "retirement",
  },
  {
    id: 6,
    title: "Debt Reduction Guide for Millennials",
    category: "Debt",
    readTime: "16 min read",
    icon: <BadgeDollarSign size={30} />,
    tagColor: "debt",
  },
  {
    id: 7,
    title: "A Guide to Building Wealth Through Stocks",
    category: "Investing",
    readTime: "19 min read",
    icon: <ShieldCheck size={30} />,
    tagColor: "investing",
  },
  {
    id: 8,
    title: "Smart Saving Strategies for Busy People",
    category: "Financial Planning",
    readTime: "12 min read",
    icon: <PieChart size={30} />,
    tagColor: "planning",
  },
  {
    id: 9,
    title: "Understanding Bonds and Fixed Income Investing",
    category: "Investing",
    readTime: "14 min read",
    icon: <Landmark size={30} />,
    tagColor: "investing",
  },
  {
    id: 10,
    title: "Asset Allocation Made Simple",
    category: "Investing",
    readTime: "17 min read",
    icon: <PieChart size={30} />,
    tagColor: "investing",
  },
];

const categories = [
  "All",
  "Investing",
  "Retirement",
  "Debt",
  "Financial Planning",
  "Tax & Saving",
];

export function Library() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = ebooks.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" ||
      book.category === selectedCategory;

    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="library-page">
      {/* Header */}

      <div className="library-header">
  <h1 className="page-semibold">
    Digital Library
  </h1>

  <p className="helper-regular">
    Explore our collection of ebooks and resources.
    <br />
    Read directly in your browser with our interactive
    reader.
  </p>
</div>

      {/* Search */}

      <div className="library-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search ebooks, topics or authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filters */}

      <div className="library-toolbar">
        <div className="category-pills">
          {categories.map((category) => (
            <button
              key={category}
              className={`pill ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <select className="sort-select">
          <option>Newest First</option>
          <option>Oldest First</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </div>

      {/* Results */}

      <p className="results-count">
        {filteredBooks.length} ebooks available
      </p>

      {/* Grid */}

      <div className="ebooks-grid">
        {filteredBooks.map((book) => (
          <div className="ebook-card" key={book.id}>
            <button className="card-menu">
              <MoreVertical size={18} />
            </button>

            <div className="ebook-icon">
              {book.icon}
            </div>

            <h3>{book.title}</h3>

            <span className={`tag ${book.tagColor}`}>
              {book.category}
            </span>

            <div className="read-time">
              <span>◷</span>
              {book.readTime}
            </div>

            <div className="card-footer">
              <button className="read-btn">
                Read Now
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div className="pagination">
        <button className="page-arrow">
          <ChevronLeft size={18} />
        </button>

        <button className="page-number active">
          1
        </button>

        <button className="page-number">
          2
        </button>

        <button className="page-arrow">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}