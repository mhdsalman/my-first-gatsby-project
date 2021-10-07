import {graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import {header, btn} from '../styles/home.module.css'
import Img from "gatsby-image"
const Home = ({data}) => {
  // console.log(data.file.childImageSharp.fluid)

  return (
      <Layout>
    <section className={header}>
      <div>
      <h2>Home Page</h2>
      <h3>Welcome to my Gatsby site!</h3>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link className={btn} to="/projects">My Portfolio Projects</Link>
      </div>
      {/* <img src="/banner.png" alt="banner" style={{maxWidth: "100%"}} /> */}
      <Img  fluid={data.file.childImageSharp.fluid} />
    </section>
      </Layout>
  )
}

// Step 3: Export your component
export default Home;

export const query = graphql`
query MyQuery {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid
      }
    }
  }
}

`

