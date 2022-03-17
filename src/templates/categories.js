import * as React from "react";
import { getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import ProductPreview from "../components/symbols/ProductPreview";
import Grid3x3 from "../components/wrappers/Grid3x3";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";

const Categorias = ({ data }) => {

  return (
    <Layout>
      <Grid3x3
        products={
          <React.Fragment>
            {data.allMarkdownRemark.edges.map(({node})  => (
              <ProductPreview
                key={node.id}
                title={node.frontmatter.title}
                img={getImage(node.frontmatter.prodimage)}
                text={node.frontmatter.short_description}
                alt={node.frontmatter}
              />
            ))}
          </React.Fragment>
        }
      />
    </Layout>
  );
};

export default Categorias;

export const pageQuery = graphql`
  query($categoria: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          categoria: { in: [$categoria] }
          prodimage: { relativePath: { ne: null } }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            prodimage {
              childrenImageSharp {
                gatsbyImageData(aspectRatio: 0.5)
              }
            }
            categoria
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
