import * as React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layouts/Layout";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";

const TagTemplate = ({data}) =>{
return(
    <Layout>

    </Layout>
);
}
export default TagTemplate;

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
      fields{
          slug
      }
    }
  }
`