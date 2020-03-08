/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import '../styles/index.scss'
//import "./layout.css"
import { Row, Col } from 'reactstrap'
import Sidebar from './Sidebar'

const Layout = ({ children, pageTitle }) => { //props.pageTitle
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content"> {/** controls width of content */}
        <Row>
          <Col md="8">
            {children}
          </Col>
          <Col md="4">
            <Sidebar/>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
