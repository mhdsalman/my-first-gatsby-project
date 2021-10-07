import React from 'react'
import { graphql} from 'gatsby'
import Layout from '../components/Layout'
import Img from "gatsby-image"
import {details, featured, htmls} from '../styles/project-details.module.css'
function projectDetails({data}) {
    const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={featured}>
                 <Img  fluid={featuredImg.childImageSharp.fluid} />
                </div>
                <div className={htmls} dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export default projectDetails;

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
