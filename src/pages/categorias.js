import React from "react";
import { getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import Grid3x3 from "../components/wrappers/Grid3x3";
import CategoryPreview from "../components/symbols/CategoryPreview";
import LandingSection from "../components/symbols/LandingSection";
import ContactForm from "../components/symbols/ContactForm";
import Heading from "../components/symbols/Heading";
import Cards from "../components/symbols/Cards";
import HalfHalf from "../components/wrappers/HalfHalf";

//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";

const smallDescriptionDummy =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla";

const CategoriasPage = ({ data }) => {
  return (
    <Layout>
      <Heading h1 alignment="center" color="color1" size="big">
        Nuestros Productos
      </Heading>
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
      <div style={{ margin: "0px 60px 0px 60px" }}>
        <HalfHalf
          left={
            <HalfHalf
              left={
                <Cards
                  spacing
                  medal
                  title="Excelencia en Calidad"
                  text={smallDescriptionDummy}
                />
              }
              right={
                <Cards
                  spacing
                  store
                  title="Existencias Inmediatas"
                  text={smallDescriptionDummy}
                />
              }
            />
          }
          right={
            <HalfHalf
              left={
                <Cards
                  spacing
                  title="Envíos a todo el país"
                  shipping
                  text={smallDescriptionDummy}
                />
              }
              right={
                <Cards
                  spacing
                  title="Mejores Precios"
                  money
                  text={smallDescriptionDummy}
                />
              }
            />
          }
        />
      </div>
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
