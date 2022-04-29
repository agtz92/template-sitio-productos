import * as React from "react";
import {getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import ProductPreview from "../components/symbols/ProductPreview";
import Grid3x3 from "../components/wrappers/Grid3x3";
import Heading from "../components/symbols/Heading";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";

const Categorias = ({pageContext, data}) => {
  const { categoria } = pageContext

  return (
    <Layout>
      <Heading h1 alignment="center" size="huge">{categoria}</Heading>
      <Grid3x3
        products={
          <React.Fragment>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <ProductPreview
                key={node.id}
                text={node.frontmatter.short_description}
                title={node.frontmatter.title}
                img={getImage(node.frontmatter.prodimage)}
                alt={node.frontmatter.title}
                link ={node.fields.slug}
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
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.5)
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
