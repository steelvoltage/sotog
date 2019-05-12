import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, graphql } from "gatsby"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa"
import Img from "gatsby-image"

const Chapter = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const chapterImages = [...frontmatter.cover, ...frontmatter.images]
  const [currentPage, setCurrentPage] = useState(1)
  const nextPage = () => {
    if (currentPage < chapterImages.length - 1) {
      return setCurrentPage(currentPage + 1)
    }
    return null
  }
  const previousPage = () => {
    if (currentPage > 0) {
      return setCurrentPage(currentPage - 1)
    }
    return null
  }
  console.log(chapterImages)
  return (
    <Layout>
      <SEO title={`${frontmatter.title} • Chapters `} />
      <div className="container">
        <Link
          to="/chapters"
          className="button is-success is-small is-hidden-mobile"
          style={{ marginTop: "1.25rem" }}
        >
          <FaLongArrowAltLeft style={{ marginRight: ".5rem" }} /> Back to
          Chapters
        </Link>
        <div className="columns is-centered">
          <div className="column content-gap">
            <div className="has-text-centered">
              {/* <figure className="image"> */}
              {/* <img
                  src={chapterImages[currentPage].publicURL}
                  alt={frontmatter.title}
                  style={{ width: "100%" }}
                /> */}
              {/* </figure> */}
              <div className="next-page" onClick={nextPage}>
                <span className="has-text-white">
                  <FaArrowRight />
                </span>
              </div>
              <div className="previous-page" onClick={previousPage}>
                <span className="has-text-white">
                  <FaArrowLeft />
                </span>
              </div>
              <Img
                fluid={chapterImages[currentPage].childImageSharp.fluid}
                alt={`Page ${currentPage + 1}`}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images {
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

export default Chapter
