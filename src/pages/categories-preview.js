import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import ProductPreview from "../components/symbols/ProductPreview";
import Grid3x3 from "../components/wrappers/Grid3x3";
import CategoryPreview from "../components/symbols/CategoryPreview";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";

const CategoriasPage = ({data}) => {
  

  return (
    <Layout>
      <Grid3x3
        products={
          <React.Fragment>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <CategoryPreview
                key={node.id}
                title={node.frontmatter.categoria}
                image={getImage(node.frontmatter.categoryimage)}
                alt={node.frontmatter}
              />
            ))}
          </React.Fragment>
        }
      />
    </Layout>
  );
};



export default CategoriasPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {categoryimage: {relativePath: {ne: null}}}}
    ) {
      edges {
        node {
          frontmatter {
            categoryimage {
              childImageSharp {
                gatsbyImageData(aspectRatio: 0.5)
              }
            }
            categoria
            prodimage {
              childrenImageSharp {
                gatsbyImageData(aspectRatio: 1.5)
              }
            }
            name
            prod_desc
            short_description
            specs
            tags
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
