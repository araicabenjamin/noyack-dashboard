"use client";
import "./support.css";

import { useState } from "react";

import {
  LifeBuoy,
  Landmark,
  Receipt,
  Brain,
  User,
  Monitor,
  ChevronDown,
  BookOpen,
  Headphones,
} from "lucide-react";

const categories = [
  "Top FAQs",
  "Investing",
  "Taxes",
  "Wealth IQ",
  "Accounts",
  "Platform",
];

const faqs = [
  {
    question: "What is Wealth IQ and how is it calculated?",
    answer:
      "Wealth IQ measures the strength of your financial profile using income, assets, liabilities, and investment behavior.",
  },
  {
    question: "How do I lower my taxes using Noyack?",
    answer:
      "Noyack provides educational resources and investment opportunities designed to help users understand tax-efficient strategies.",
  },
  {
    question: "How are returns calculated?",
    answer:
      "Returns are calculated using fund performance data and may vary by investment.",
  },
  {
    question: "What investments are available on Noyack?",
    answer:
      "Investment opportunities may include real estate, private credit, venture capital, and alternative investments.",
  },
  {
    question: "How do distributions and withdrawals work?",
    answer: "Distribution schedules vary by investment and fund structure.",
  },
  {
    question: "Can I invest through an IRA on Noyack?",
    answer:
      "Certain opportunities may be available through self-directed IRAs.",
  },
];

export default function Support() {
  const [activeCategory, setActiveCategory] = useState("Top FAQs");

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  return (
    <div className="supportPage">
      <div className="supportHeader">
        <h1 className="page-semibold">Support Center</h1>

        <p className="helper-regular">
          Find answers about investing, taxes, wealth planning, and your
          account.
        </p>
      </div>

      <div className="supportTabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`supportTab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category === "Top FAQs" && <LifeBuoy size={18} />}
            {category === "Investing" && <Landmark size={18} />}
            {category === "Taxes" && <Receipt size={18} />}
            {category === "Wealth IQ" && <Brain size={18} />}
            {category === "Accounts" && <User size={18} />}
            {category === "Platform" && <Monitor size={18} />}

            <span>{category}</span>
          </button>
        ))}
      </div>

      <div className="supportLayout">
        <div className="faqSection">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="faqItem">
              <button
                className="faqTrigger"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span>{faq.question}</span>

                <ChevronDown
                  size={20}
                  className={
                    openFAQ === index ? "faqChevron open" : "faqChevron"
                  }
                />
              </button>

              {openFAQ === index && (
                <div className="faqContent">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="supportSidebar">

  <div className="supportCard">
    <div className="supportCardIcon">
      <BookOpen size={28} />
    </div>

    <h3 className="card-semibold">
      Knowledge Base
    </h3>

    <p className="helper-regular">
      Browse guides, tutorials, and
      investment education resources.
    </p>

    <button className="secondaryButton">
      View Library
    </button>
  </div>

  <div className="supportCard">
    <div className="supportCardIcon supportCardIconSuccess">
      <Headphones size={28} />
    </div>

    <h3 className="card-semibold">
      Need Support?
    </h3>

    <p className="helper-regular">
      Can't find what you're looking for?
      Our team is here to help.
    </p>

    <button className="primaryButton">
      Contact Support
    </button>
  </div>

</div>
      </div>
    </div>
  );
};
