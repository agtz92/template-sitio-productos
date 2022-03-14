import * as React from "react";
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import Layout from "../components/layouts/Layout";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";

const TagTemplate = ({pageContext, data}) =>{
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } en "${tag}"`
return(
    <Layout>

    </Layout>
);
}
TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default TagTemplate;

export const query = graphql`
query($tag: String) {
  allMarkdownRemark(
    limit: 2000
    filter: { frontmatter: { tags: { in: [$tag] } } }
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          featuredimage
          tags
          title
          categoria
          short_description
        }
      }
    }
  }
}

`