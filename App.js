import React from "react";
import "../styles.css";
import Nav from "./Nav";
import Header from "./Header";
import Aside from "./Aside";
import Section from "./Section";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Section />
      <Aside />
      <Footer />
    </div>
  );
}
