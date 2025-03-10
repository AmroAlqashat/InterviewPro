import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  const [showForm, setShowForm] = useState(false);

  function formVisibility(){
      setShowForm(!showForm);
  }
  return (
    <div>
      <Header formVisibility={formVisibility}/>
      <Hero showForm={showForm} formVisibility={formVisibility}/>
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
