import React, { useState } from 'react';
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { StaticImage } from "gatsby-plugin-image";

//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";
import "../webflow_styles/symbols/tables.css";
import Cards from "../components/symbols/Cards";
//Post processing
import showdown from "showdown";
import Container from "../components/wrappers/Container";
import HalfHalf from "../components/wrappers/HalfHalf";
import Heading from "../components/symbols/Heading";
import LandingSection from "../components/symbols/LandingSection";
import ContactForm from "../components/symbols/ContactForm";
import Layout from "../components/layouts/Layout";
import PercentageDiv from "../components/symbols/PercentageDiv";


const BlogPost = ({ data }) => {
  const converter = new showdown.Converter();
  const post = data.markdownRemark;
  const IMG_SELECTOR = [0, 1, 2];
  let mainImg = IMG_SELECTOR[0];
  const [imageSelection, setImageSelection] = useState(IMG_SELECTOR[0]);

  if (imageSelection === IMG_SELECTOR[0]) {
    mainImg = (
      <GatsbyImage
        image={getImage(post.frontmatter.prodimage)}
        alt={post.frontmatter.title}
      />
    );
    console.log("IMG 1");
  } else if (imageSelection === IMG_SELECTOR[1]) {
    mainImg = (
      
      <GatsbyImage
        image={getImage(post.frontmatter.prodimage1)}
        alt={post.frontmatter.title}
      />
    );
    console.log("IMG 2");
  } else if (imageSelection === IMG_SELECTOR[2]) {
    mainImg = (
      <GatsbyImage
        image={getImage(post.frontmatter.prodimage2)}
        alt={post.frontmatter.title}
      />
    );
  } else {
    mainImg = (
      <GatsbyImage
        image={getImage(post.frontmatter.prodimage)}
        alt={post.frontmatter.title}
      />
    );
    console.log("IMG 3");
  }

  return (
    <Layout>
      <div className="pattern-background">
        <HalfHalf
          left={
            <PercentageDiv
              percent="70"
              paddingleft="120"
              paddingright="0"
              paddingtop="60"
              paddingbottom="60"
            >
              <StaticImage
                placeholder="blurred"
                width={120}
                src="../images/logo.png"
                alt="background image"
              />
              <Heading h1 size="huge darkmode-text">
                {post.frontmatter.title}
              </Heading>
              <Heading h2 color="color5" size="big">
                {post.frontmatter.title}
              </Heading>
              <p className="paragraph-regular darkmode-text">
                {post.frontmatter.short_description}
              </p>
              <button className="button-regular w-button darkmode">
                Cotiza Ahora
              </button>
            </PercentageDiv>
          }
          right={
            <PercentageDiv
              percent="100"
              paddingleft="0"
              paddingright="0"
              paddingtop="120"
              paddingbottom="120"
            >
              <div className="offsetimage">
                {mainImg}
                <div  style={{ display: "flex" }}>
                  <div role = "button" onClick={() => setImageSelection(IMG_SELECTOR[0])} onKeyDown={() => setImageSelection(IMG_SELECTOR[0])}
                    style={{
                      width: "100px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <GatsbyImage
                      image={getImage(post.frontmatter.prodimage)}
                      alt={post.frontmatter.title}
                      width="50"
                    />
                  </div>
                  <div role = "button" onClick={() => setImageSelection(IMG_SELECTOR[1])} onKeyDown={() => setImageSelection(IMG_SELECTOR[1])}
                    style={{
                      width: "100px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <GatsbyImage
                      image={getImage(post.frontmatter.prodimage)}
                      alt={post.frontmatter.title}
                      width="50"
                    />
                  </div>
                  <div role = "button" onClick={() => setImageSelection(IMG_SELECTOR[2])} onKeyDown={() => setImageSelection(IMG_SELECTOR[2])}
                    style={{
                      width: "100px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <GatsbyImage
                      image={getImage(post.frontmatter.prodimage)}
                      alt={post.frontmatter.title}
                      width="50"
                    />
                  </div>
                </div>
              </div>
            </PercentageDiv>
          }
        />
      </div>

      <Container margin>
        <div
          className="div-text-post"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(post.frontmatter.prod_desc),
          }}
        />
      </Container>

      <Container margin>
        <HalfHalf
          left={
            <React.Fragment>
              <div
                className="div-text-post"
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(post.frontmatter.sizes),
                }}
              />
            </React.Fragment>
          }
          right={
            <Cards
              title="Especificaciones"
              text={
                <div
                  className="div-text-post"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(post.frontmatter.specs),
                  }}
                />
              }
            />
          }
        />
      </Container>
      <LandingSection>
        <ContactForm darkmodetext></ContactForm>
      </LandingSection>
    </Layout>
  );
};
export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        categoria
        date
        name
        prod_desc
        short_description
        sizes
        specs
        tags
        title
        prodimage {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
        prodimage1 {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
        prodimage2 {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
        
      }
      fields {
        slug
      }
    }
  }
`;
