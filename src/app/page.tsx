import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/features";
import HowItWorks from "@/components/hiw";
import CTA from "@/components/cta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <HowItWorks/>
      <CTA />
      <Footer />
    </div>
  );
}

export default Homepage;
