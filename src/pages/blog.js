import React from "react"
import { Link } from "gatsby"
import { Row, Col } from 'reactstrap'
import Sidebar from '../components/Sidebar'

//import style from "../styles/global.css"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const BlogPage = () => (
  <Layout pageTitle="Blog Page">


    <SEO title="Blog" />
    <h1>Under Construction</h1>
    <p>Coming Soon...</p>
      
      <StaticQuery 
      query={indexQuery} 
        render={data => {
          return(
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post 
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
                    />
              ))}
            </div>
        )
      }}/>
 
  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM Do YYYY")
          author
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
          
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`

export default BlogPage
