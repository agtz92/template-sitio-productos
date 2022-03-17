import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";
import Cards from "../components/symbols/Cards";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Cards title={post.frontmatter.title} img={post.frontmatter.featuredimage} text={post.frontmatter.short_description}/>
    </Layout>
  );
};
export default BlogPost;

export const pageQuery = graphql`
  query {
    markdownRemark {
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
            gatsbyImageData(aspectRatio: 1.5)
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
