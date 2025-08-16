import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";

function Home(): React.ReactElement {
  const [showForm, setShowForm] = useState<boolean>(false);

  function formVisibility(): void {
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
