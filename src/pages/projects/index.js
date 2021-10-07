import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {portfolio, project} from '../../styles/project.module.css'
import Img from "gatsby-image"
function Projects({data}) {
    console.log(data);
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    console.log(contact)
    return (
        <>
        <Layout>
         <div className={portfolio}>

        <h2>Portfolio</h2>
        <h3>Project Website I've Create</h3>
        <div className={project}>
            {projects.map(project =>(
                <Link to={"/projects/" + project.frontmatter.slug} key={project.id} >
                    <div>
                      <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                        <h3>{project.frontmatter.title}</h3>
                        <p>{project.frontmatter.stack}</p>
                    </div>
                    </Link>
            ))}
        </div>
        <p>{contact}</p>
         </div>
        </Layout>
            
        </>
    )
}

export default Projects

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}

`