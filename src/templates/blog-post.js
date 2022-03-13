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

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categoria
        featuredimage
        date(formatString: "MM-DD-YYYY")
        short_description
        tags
      }
      fields {
        slug
      }
    }
  }
`;
