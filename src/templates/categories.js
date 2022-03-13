import * as React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layouts/Layout";
import ProductPreview from "../components/symbols/ProductPreview";
import Grid3x3 from "../components/wrappers/Grid3x3";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";

const Categorias = ({data}) => {
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

export default Categorias;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categoria
        featuredimage
        date(formatString: "MM-DD-YYYY")
        short_description
        tags
      }
      fields{
          slug
      }
    }
  }
`