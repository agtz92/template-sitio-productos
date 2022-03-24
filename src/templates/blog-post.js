import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/layouts/Layout";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";
import "../webflow_styles/symbols/tables.css";
import Cards from "../components/symbols/Cards";
import PostIntro from "../components/symbols/PostIntro";
//Post processing
import showdown from "showdown";
import Container from "../components/wrappers/Container";
import Div5050 from "../components/wrappers/Div5050";
import HalfHalf from "../components/wrappers/HalfHalf";

const BlogPost = ({ data }) => {
  const converter = new showdown.Converter();
  const post = data.markdownRemark;
  return (
    <Layout>
      <Container margin content={<h1>{post.frontmatter.title}</h1>} />

      <PostIntro
        text={post.frontmatter.short_description}
        image={getImage(post.frontmatter.prodimage)}
        alt={post.frontmatter.title}
      />
      <Container
        margin
        content={
          <div
            className="div-text-post"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(post.frontmatter.prod_desc),
            }}
          />
        }
      />

      <Container
        margin
        content={
          <HalfHalf
            left={
              <React.Fragment>
                <div
                  className="div-text-post"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(post.frontmatter.sizes),
                  }}
                />
              </React.Fragment>
            }
            right={
              <Cards
                title="Especificaciones"
                text={
                  <div
                    className="div-text-post"
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(post.frontmatter.specs),
                    }}
                  />
                }
              />
            }
          />
        }
      />
    </Layout>
  );
};
export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        categoria
        date
        name
        prod_desc
        short_description
        sizes
        specs
        tags
        title
        prodimage {
          childImageSharp {
            gatsbyImageData(aspectRatio: 2)
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
