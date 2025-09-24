import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learning Your Way</div>
      <h2 className="text-2xl font-bold">Build and personalize your learning companion</h2>
      <p className="text-center">
        Create your own AI-powered learning companion tailored to your unique learning style and goals.
      </p>
      <Image
        src="/images/cta.svg"
        alt="Learning companion"
        width={200}
        height={150}
        className="rounded-lg"
      />
      <Link href="/companion-library/new">
        <button className="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7v14"/>
          </svg>
          Build a new companion
        </button>
      </Link>
    </section>
  );
};

export default CTA;
