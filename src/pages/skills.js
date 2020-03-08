import React from "react"
import { Link } from "gatsby"

import style from "../styles/global.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <h1>Hello Friends 8)</h1>
    <p>This is the beginning of my portfolio website.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default SkillsPage