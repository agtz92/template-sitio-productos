import * as React from "react";
import kebabCase from "lodash/kebabCase"
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import ProductPreview from "../components/symbols/ProductPreview";
import Grid3x3 from "../components/wrappers/Grid3x3";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";

const Categorias = ({ pageContext, data }) => {
  const { categoria } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const categoriaHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } in "${categoria}"`;
  const smallDescriptionDummy =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla";

  return (
    <Layout>
      <Grid3x3
        products={
          <React.Fragment>
            <ProductPreview
              title="Product Preview"
              price="$150.99"
              text={smallDescriptionDummy}
            />
            <ProductPreview
              title="Product Preview"
              price="$150.99"
              text={smallDescriptionDummy}
            />
            <ProductPreview
              title="Product Preview"
              price="$150.99"
              text={smallDescriptionDummy}
            />
            <ProductPreview
              title="Product Preview"
              price="$150.99"
              text={smallDescriptionDummy}
            />
            <ProductPreview
              title="Product Preview"
              price="$150.99"
              text={smallDescriptionDummy}
            />
            <ProductPreview
              title="Product Preview"
              price="$150.99"
              text={smallDescriptionDummy}
            />
            <ProductPreview
              title="Product Preview"
              price="$150.99"
              text={smallDescriptionDummy}
            />
          </React.Fragment>
        }
      />
    </Layout>
  );
};
Categorias.propTypes = {
  pageContext: PropTypes.shape({
    categoria: PropTypes.string.isRequired,
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
};

export default Categorias;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            categoryimage {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.5)
              }
            }
            categoria
            featuredimage {
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
