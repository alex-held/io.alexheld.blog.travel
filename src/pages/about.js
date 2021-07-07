import React from "react"
import Nav from "../components/Nav"
import SEO from "../components/Seo"
import ppl from "../images/woman.jpg"

const AboutPage = () => (
  <div>
    <SEO title="About" />
    <Nav />
    <div className="bio-container">
      <img className="bio-image" src={ppl} alt="" />
      <div className="containy">
        <h1 className="name">Hi I'm Alex 👋🏻</h1>
        <h1 className="short-bio">
          A developer, blogger and overall open-minded person who wants to share
          his adventures with the world.
        </h1>
      </div>
    </div>

    <div className="biography-container">
      <p>
        <span>I</span>'m a software engineer and tinkerer. I was born in 1996
        (you can do the math) and grew up in Cologne, Germany.
      </p>
      <p>
        I create content all about Development, Infrastructure, Technology and
        Architecture. You can find this content at my{" "}
        <a href="https://alexheld.io">homepage</a>.
      </p>
      <p>
        With this blog I want to share my travel adventures with everybody
        interessted. Hopefully somebody finds the information I provide helpful.
        ✌🏻
      </p>
    </div>
  </div>
)

export default AboutPage
