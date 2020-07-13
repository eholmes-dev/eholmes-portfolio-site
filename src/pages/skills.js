import React from "react"
import { Link } from "gatsby"

import style from "../styles/global.css"
import Layout from "../components/homeLayout"
import Image from "../components/image"
import SEO from "../components/seo"

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <h1 style={{ textAlign: 'left', }}>Things I'm Good At...</h1>
    <br/>
    <br/>
    <br/>
    <div class="column" style={{ position: 'relative', width: '50%'}}>
    <div class="skills-section" style={{ textAlign: 'left', marginLeft: '100px', marginRight: '0'}}>
      <ul>
        <li style={{ fontWeight: 'bold', fontSize: '25px'}}>Java</li>
        <li style={{ fontWeight: 'bold', fontSize: '25px'}}>.NET C#</li>
        <li style={{ fontWeight: 'bold', fontSize: '25px'}}>Database & SQL</li>
        <li style={{ fontWeight: 'bold', fontSize: '25px'}}>Web Development</li>
      </ul>
    </div>
    </div>

    <div class="column" style={{ position: 'relative', width: '50%'}} >
    <div class="skills-section" style={{ textAlign: 'left', marginLeft: '150px' }}>
      <ul>
        <li style={{ fontWeight: 'bold', fontSize: '25px'}}>Javascript</li>
        <li style={{ fontWeight: 'bold', fontSize: '25px'}}>Excel</li>
        <li style={{ fontWeight: 'bold', fontSize: '25px'}}>Data Analysis</li>
        <li style={{ fontWeight: 'bold', fontSize: '25px'}}>Research</li>
      </ul>
    </div>
    </div>
    
    <span class="skill-desc">
      <div class="skills-java">
        
        <h2 style={{ marginTop: '450px'}}>Java Experience</h2>
        <p>this is my java skill description, this is my java skill description, this is my java skill description
        this is my java skill description, this is my java skill description, this is my java skill description
        this is my java skill description, this is my java skill description, this is my java skill description
        ,this is my java skill description, this is my java skill description, this is my java skill description, this is my java skill description
        this is my java skill description, this is my java skill description
        </p>
      </div>
    </span>

  </Layout>
)

export default SkillsPage