// pages/index.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import SupportCards from "@/components/SupportCards";
import FutureImpact from "@/components/FutureImpact";
import WhyItMatters from "@/components/whyItMatters";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer"; // Assuming you have a Footer component

const Home = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <SupportCards />
      <FutureImpact />
      <WhyItMatters />
      <Donate />
      <Footer />  

      
    </div>
  );
};

export default Home;
