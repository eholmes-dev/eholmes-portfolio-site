import React from "react"
import { Link } from "gatsby"

import style from "../styles/global.css"
import Layout from "../components/homeLayout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Under Construction</h1>
    <p>Coming Soon...</p>
    <div class="about-section">
        <p>
        
          This is the about section.This is the about sectionThis is the about sectionThis is the about section
          This is the about sectionThis is the about sectionThis is the about sectionThis is the about section
          This is the about sectionThis is the about sectionThis is the about sectionThis is the about section
          This is the about sectionThis is the about sectionThis is the about sectionThis is the about section
          This is the about sectionThis is the about sectionThis is the about sectionThis is the about section
          This is the about sectionThis is the about sectionThis is the about sectionThis is the about section

          This is the about section.This is the about sectionThis is the about sectionThis is the about section
          This is the about sectionThis is the about sectionThis is the about sectionThis is the about section
          This is the about sectionThis is the about sectionThis is the about sectionThis is the about section
          This is the about sectionThis is the about sectionThis is the about sectionThis is the about section
          This is the about sectionThis is the about sectionThis is the about sectionThis is the about section
          This is the about sectionThis is the about sectionThis is the about sectionThis is the about section
          </p>
    </div>
    <div style={{  paddingTop: '20px', maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div class="about-section2">
    <div class="row">
      <div class="column">
        <h4>Education</h4>
          <ul>
            <li>Software Development A.A.S. - Kirkwood Community College</li>
          </ul>
      </div>
      <div class="column">
        <h4>Certificates</h4>
          <ul>
            <li>Java Programming Certificate</li>
          </ul>
          <ul>
            <li>.NET Programming Certificate</li>
          </ul>
      </div>
    </div>      
    </div>
  </Layout>
)

export default AboutPage