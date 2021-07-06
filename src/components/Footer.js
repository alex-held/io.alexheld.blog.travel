import { Link } from "gatsby"
import React from "react"
import TwitterSVG from "../Icons/TwitterSVG"

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="horizontal-line" />
      <div className="footer-content-container">
        <div className="copyright">
          © 2021 &nbsp;
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Alexander Held
          </Link>
        </div>
        <div className="social-icons-container">
          <a href="https://twitter.com/0_alexheld">
            <TwitterSVG />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
