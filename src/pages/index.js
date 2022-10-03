import * as React from "react";
import Articles from "../components/Articles";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../styles/index.css";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Easybank Landing Page - Frontend Mentor Challenge</title>
    <link rel="icon" type="image/png" href="/images/favicon-32x32.png"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
  </>
);
