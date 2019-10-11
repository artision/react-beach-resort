import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Ever since America invented the cocktail, at the beginning of the nineteenth century, it has evolved: from sweet to dry, hot to icy."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Ever since America invented the cocktail, at the beginning of the nineteenth century, it has evolved: from sweet to dry; hot to icy."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Ever since America invented the cocktail, at the beginning of the nineteenth century, it has evolved: from sweet to dry; hot to icy."
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Ever since America invented the cocktail, at the beginning of the nineteenth century, it has evolved: from sweet to dry; hot to icy."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
