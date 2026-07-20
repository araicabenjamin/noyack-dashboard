"use client";
import { useState } from "react";
import "./library.css";

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

// Function to download a file
function downloadFile(url: string, filename: string) { 
  const link = document.createElement("a"); 
  link.href = url; 
  link.download = filename; 
  link.click(); 
}

interface Ebook {
  id: number;
  title: string;
  category: string;
  readTime: string;
  icon: React.ReactNode;
  tagColor: string;
  fileUrl?: string;

}

const ebooks: Ebook[] = [
  {
    id: 1,
    title: "50 Years of Warren Buffett Lessons",
    category: "Investing",
    readTime: "18 min read",
    icon: <TrendingUp size={30} />,
    tagColor: "investing",
    fileUrl: "/ebooks/50 Years of Warren Buffett Lessons_Ebook.pdf",
  },
  {
    id: 2,
    title: "Alts for All The Definitive Guide to Alternatives",
    category: "Investing",
    readTime: "24 min read",
    icon: <Landmark size={30} />,
    tagColor: "investing",
    fileUrl: "/ebooks/Alts for All The Definitive Guide to Alternatives_Ebook.pdf",
  },
  {
    id: 3,
    title: "Generating Impact Using Alternative Investments",
    category: "Investing",
    readTime: "22 min read",
    icon: <Target size={30} />,
    tagColor: "investing",
    fileUrl: "/ebooks/Generating Impact Using Alternative Investments_Ebook.pdf",
  },
  {
    id: 4,
    title: "Family Financial Planning Guide (Oct 2023)",
    category: "Financial Planning",
    readTime: "15 min read",
    icon: <Users size={30} />,
    tagColor: "planning",
    fileUrl: "/ebooks/Family Financial Planning Guide (Oct 2023)_Ebook.pdf",
  },
  {
    id: 5,
    title: "The Ultimate Retirement Planning Guide",
    category: "Retirement",
    readTime: "20 min read",
    icon: <Umbrella size={30} />,
    tagColor: "retirement",
    fileUrl: "/ebooks/The Ultimate Retirement Planning Guide_Ebook.pdf",
  },
  {
    id: 6,
    title: "Debt Reduction Guide for Millennials",
    category: "Debt",
    readTime: "16 min read",
    icon: <BadgeDollarSign size={30} />,
    tagColor: "debt",
    fileUrl: "/ebooks/Debt Reduction Guide for Millennials_Ebook.pdf",
  },
  {
    id: 7,
    title: "A Guide to Building Wealth Through Stocks",
    category: "Investing",
    readTime: "19 min read",
    icon: <ShieldCheck size={30} />,
    tagColor: "investing",
    fileUrl: "/ebooks/A Guide to Building Wealth Through Stocks_Ebook.pdf",
  },
  {
    id: 8,
    title: "Smart Saving Strategies for Busy People",
    category: "Financial Planning",
    readTime: "12 min read",
    icon: <PieChart size={30} />,
    tagColor: "planning",
    fileUrl: "/ebooks/Smart Saving Strategies for Busy People_Ebook.pdf",
  },
  {
    id: 9,
    title: "Understanding Bonds and Fixed Income Investing",
    category: "Investing",
    readTime: "14 min read",
    icon: <Landmark size={30} />,
    tagColor: "investing",
    fileUrl: "/ebooks/Understanding Bonds and Fixed Income Investing_Ebook.pdf",
  },
  {
    id: 10,
    title: "Asset Allocation Made Simple",
    category: "Investing",
    readTime: "17 min read",
    icon: <PieChart size={30} />,
    tagColor: "investing",
    fileUrl: "/ebooks/Asset Allocation Made Simple_Ebook.pdf",  
  },
];

export default function Library() {
  const [activeTab, setActiveTab] = useState("ebooks");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = ebooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="library-page">

      {/* Header */}
      <div className="library-header">
        <h1 className="page-semibold">Digital Library</h1>

        <p className="helper-regular">
          Explore our collection of ebooks and resources.
          <br />
          Read directly in your browser with our interactive reader.
        </p>
      </div>

      {/* Tabs */}
      <div className="library-tabs">
        <button
          className={activeTab === "ebooks" ? "active" : ""}
          onClick={() => setActiveTab("ebooks")}
        >
          Ebooks
        </button>

        <button
          className={activeTab === "reports" ? "active" : ""}
          onClick={() => setActiveTab("reports")}
        >
          Reports
        </button>

        <button
          className={activeTab === "glossary" ? "active" : ""}
          onClick={() => setActiveTab("glossary")}
        >
          Glossary
        </button>
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

      {/* Results */}
      <p className="results-count">{filteredBooks.length} ebooks available</p>

      {/* Grid */}
      <div className="ebooks-grid">
        {filteredBooks.map((book) => (
          <div className="ebook-card" key={book.id}>
            <button className="card-menu">
              <MoreVertical size={18} />
            </button>

            <div className="ebook-icon">{book.icon}</div>

            <h3>{book.title}</h3>

            <span className={`tag ${book.tagColor}`}>{book.category}</span>

            <div className="read-time">
              <span>◷</span>
              {book.readTime}
            </div>

            <div className="card-footer">
              <button className="read-btn"
              onClick={() => book.fileUrl && downloadFile(book.fileUrl, `${book.title}.pdf`)}> 
                Download Now
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

        <button className="page-number active">1</button>

        <button className="page-number">2</button>

        <button className="page-arrow">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
