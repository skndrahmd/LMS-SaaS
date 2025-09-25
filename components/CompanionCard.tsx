import React from "react";
import Link from "next/link";

const CompanionCard = ({
  id,
  subject,
  title,
  topic,
  duration,
  bgColor,
}: {
  id: string;
  subject: string;
  title: string;
  topic: string;
  duration: string;
  bgColor?: string;
}) => {
  return (
    <div className="companion-card" style={{ backgroundColor: bgColor }}>
      <div className="flex justify-between items-start">
        <div className="subject-badge w-fit">
          <h2>{subject}</h2>
        </div>
        <button className="companion-bookmark">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
          </svg>
        </button>
      </div>
      <h1>{title}</h1>
      <p>Topic: {topic}</p>
      <p className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
        {duration} mins duration
      </p>
      <Link href={`/companion-library/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">Launch Session</button>
      </Link>
    </div>
  );
};

export default CompanionCard;
