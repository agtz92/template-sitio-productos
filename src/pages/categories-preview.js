import * as React from "react";
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layouts/Layout";
import ProductPreview from "../components/symbols/ProductPreview";
import Grid3x3 from "../components/wrappers/Grid3x3";
import CategoryPreview from "../components/symbols/CategoryPreview";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";

const CategoriasPage = ({
  data: {
    allMarkdownRemark: { group},
  },
}) => {
  const smallDescriptionDummy =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla";

  return (
    <Layout>
      <Grid3x3
          products={
            <React.Fragment>
              {group.map(categoria => (
                        <CategoryPreview key={categoria.fieldValue} title={categoria.categoria}/>
                        
                    ))}
            </React.Fragment>
          }
        />
    </Layout>
  );
};

CategoriasPage.propTypes = {
  data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
          group: PropTypes.arrayOf(
              PropTypes.shape({
                  fieldValue: PropTypes.string.isRequired,
                  totalCount: PropTypes.number.isRequired,
              }).isRequired
          ),
      }),
      site: PropTypes.shape({
          siteMetadata: PropTypes.shape({
              title: PropTypes.string.isRequired,
          }),
      }),
  }),
}

export default CategoriasPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      filter: {frontmatter: {categoryimage: {ne: null}}}
    ) {
      group(field: frontmatter___categoria) {
        group(field: id) {
          edges {
            node {
              frontmatter {
                categoria
                categoryimage
              }
              fields {
                slug
              }
            }
          }
        }
      }
    }
  }
  
`