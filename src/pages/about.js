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
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default AboutPage