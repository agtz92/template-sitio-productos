import React from "react";
import { getImage } from "gatsby-plugin-image";
import { Fade } from "react-awesome-reveal";
import { graphql } from "gatsby";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";
import Cards from "../components/symbols/Cards";
import SimpleCard from "../components/symbols/SimpleCard";
import Layout from "../components/layouts/Layout";
import FeatureCard from "../components/symbols/FeatureCard";
import NewsPreviewBig from "../components/symbols/NewsPreviewBig";
import Div5050 from "../components/wrappers/Div5050";
import Grid3x3 from "../components/wrappers/Grid3x3";
import CategoryPreview from "../components/symbols/CategoryPreview";
import LandingSection from "../components/symbols/LandingSection";
import ContactForm from "../components/symbols/ContactForm";
import Heading from "../components/symbols/Heading";
import HalfHalf from "../components/wrappers/HalfHalf";
import LandingSection2 from "../components/symbols/LandingSection2";

const smallDescriptionDummy =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla";
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

// markup
const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <React.Fragment>
      <Layout>
        <div className="pattern-background">
          <Fade>
            <LandingSection2 />
          </Fade>
          </div>
          <Heading h2 alignment="center" color="color1">
            Categorías de Productos
          </Heading>
          <Grid3x3
            products={
              <Fade cascade damping={0.3}>
                {edges.map(({ node }) => (
                  <CategoryPreview
                    key={node.id}
                    title={node.frontmatter.categoria}
                    image={getImage(node.frontmatter.categoryimage)}
                    alt={node.frontmatter}
                    color="darkmode-text"
                  />
                ))}
              </Fade>
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

        <FeatureCard
          title="¿Quiénes somos?"
          bigtitle="37 Años de Experiencia"
          text="En MatMarkt tenemos 37 años de experiencia fabricando y distribuyendo productos de hule industrial para minoristas y mayoristas siempre con la mejor calidad y precio del mercado"
          card1Title="Fabricantes"
          card2Title="Distribuidores"
          card1Text="Somos fabricantes de productos de hule siempre enfocándonos en mejora continua. Podemos manejar desde productos comerciales hasta los requerimientos más específicos de nuestros clientes"
          card2Text="Distribuimos desde el pedido más pequeño hasta el más grande según tus necesidades. Tenemos envíos gratis* dentro de la ciudad de México y zona metropolitana y también la ciudad de Querétaro. Enviamos a todo el país"
        />

        <LandingSection>
          <ContactForm darkmodetext></ContactForm>
        </LandingSection>

        <SimpleCard
          title="Simple Card Component"
          text={smallDescriptionDummy}
        />

        <NewsPreviewBig
          title="NewsPreviewsBig Component"
          categ="Packing"
          text={smallDescriptionDummy}
          date={today.toLocaleDateString()}
        />

        <Grid3x3
          products={
            <React.Fragment>
              {edges.map(({ node }) => (
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

        <Div5050
          left={
            <React.Fragment>
              <FeatureCard
                title="Div5050 Wrapper"
                bigtitle="Div5050 Wrapper"
                text={smallDescriptionDummy}
                card1Title="Card 1 Title"
                card2Title="Card 2 Title"
                card1Text={smallDescriptionDummy}
                card2Text={smallDescriptionDummy}
              />
              <Cards
                title="Div5050 Wrapper"
                subtitle="Dummy Subtitle"
                text={smallDescriptionDummy}
              />
              <Div5050
                noPaddingSide
                left={
                  <React.Fragment>
                    <Cards
                      title="Div5050 Wrapper"
                      subtitle="Dummy Subtitle"
                      text={smallDescriptionDummy}
                      margin
                    />
                    <Cards
                      title="Div5050 Wrapper"
                      subtitle="Dummy Subtitle"
                      text={smallDescriptionDummy}
                    />
                  </React.Fragment>
                }
                right={
                  <React.Fragment>
                    <Cards
                      title="Div5050 Wrapper"
                      subtitle="Dummy Subtitle"
                      text={smallDescriptionDummy}
                      margin
                    />
                    <Cards
                      title="Div5050 Wrapper"
                      subtitle="Dummy Subtitle"
                      text={smallDescriptionDummy}
                    />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          }
          right={
            <React.Fragment>
              <FeatureCard
                title="Div5050 Wrapper"
                bigtitle="Div5050 Wrapper"
                text={smallDescriptionDummy}
                card1Title="Card 1 Title"
                card2Title="Card 2 Title"
                card1Text={smallDescriptionDummy}
                card2Text={smallDescriptionDummy}
              />
              <Cards
                title="Div5050 Wrapper"
                subtitle="Dummy Subtitle"
                text={smallDescriptionDummy}
              />
              <Div5050
                noPaddingSide
                left={
                  <React.Fragment>
                    <Cards
                      title="Div5050 Wrapper"
                      subtitle="Dummy Subtitle"
                      text={smallDescriptionDummy}
                      margin
                    />
                    <Cards
                      title="Div5050 Wrapper"
                      subtitle="Dummy Subtitle"
                      text={smallDescriptionDummy}
                    />
                  </React.Fragment>
                }
                right={
                  <React.Fragment>
                    <Cards
                      title="Div5050 Wrapper"
                      subtitle="Dummy Subtitle"
                      text={smallDescriptionDummy}
                      margin
                    />
                    <Cards
                      title="Div5050 Wrapper"
                      subtitle="Dummy Subtitle"
                      text={smallDescriptionDummy}
                    />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          }
        />
        <LandingSection>
          <ContactForm darkmodetext></ContactForm>
        </LandingSection>
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;

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
