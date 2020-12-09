import React, { Component } from "react";
// import "../styles.css";

export default class Section extends Component {
  render() {
    return (
      <section className="section">
        <heading>section</heading>
        <article className="article-1">
          <heading>article</heading>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
        </article>
      </section>
    );
  }
}
