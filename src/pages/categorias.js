import * as React from "react";
import {getImage } from "gatsby-plugin-image";
import {graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import Grid3x3 from "../components/wrappers/Grid3x3";
import CategoryPreview from "../components/symbols/CategoryPreview";
import LandingSection from "../components/symbols/LandingSection";
import ContactForm from "../components/symbols/ContactForm";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";

const CategoriasPage = ({ data }) => {
  return (
    <Layout>
      <Grid3x3
        products={
          <React.Fragment>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <CategoryPreview
                key={node.id}
                title={node.frontmatter.categoria}
                image={getImage(node.frontmatter.categoryimage)}
                alt={node.frontmatter}
                color="darkmode-text"
              />
            ))}
          </React.Fragment>
        }
      />
      <LandingSection>
        <ContactForm darkmodetext></ContactForm>
      </LandingSection>
    </Layout>
  );
};

export default CategoriasPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { categoryimage: { relativePath: { ne: null } } } }
    ) {
      edges {
        node {
          frontmatter {
            categoryimage {
              childImageSharp {
                gatsbyImageData(aspectRatio: 0.8)
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
