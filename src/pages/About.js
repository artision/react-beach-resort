import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Hero hero="roomsHero">
      <Banner title="about us">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
}
