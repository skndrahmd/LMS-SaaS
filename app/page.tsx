"use client";

import React from "react";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import CompanionCard from "@/components/CompanionCard";
import { recentSessions } from "@/constants";

const page = async () => {


  return (
    <div className="bg-gray-50">
    <main className="bg-gray-50 pb-6">
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          subject="Mathematics"
          title="Algebra"
          topic="Linear Equations"
          duration="10"
          bgColor="orange"
        />
        <CompanionCard
          subject="Mathematics"
          title="Algebra"
          topic="Linear Equations"
          duration="10"
          bgColor="light-purple"
        />
        <CompanionCard
          subject="Mathematics"
          title="Algebra"
          topic="Linear Equations"
          duration="10"
          bgColor="green"
        />
      </section>
      <section className="home-section">
        <div className="w-full max-lg:w-full">
          <CompanionsList
          title="Recently completed lessons"
          companions={recentSessions}
          classNames="w-full max-lg:w-full" />
        </div>

        <CTA />
      </section>
    </main>
    </div>
  );
};

export default page;
