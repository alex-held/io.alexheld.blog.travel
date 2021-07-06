import { graphql } from "gatsby"
import React from "react"
import BlogCards from "../components/BlogCards"
import FeaturedBlog from "../components/FeaturedBlog"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Travel Blog | Alexander Held" />
      <FeaturedBlog data={data.blog} />
      <BlogCards data={data.blog} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    blog: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
            read
            topic
            image {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
