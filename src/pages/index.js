import * as React from "react";
//Generic Styles
import "../webflow_styles/normalize.css";
import "../webflow_styles/webflow.css";
import Cards from "../components/symbols/Cards";
import SimpleCard from "../components/symbols/SimpleCard";
import Layout from "../components/layouts/Layout";
import FeatureCard from "../components/symbols/FeatureCard";
import NewsPreviewBig from "../components/symbols/NewsPreviewBig";
import Div5050 from "../components/wrappers/Div5050";
import ProductPreview from "../components/symbols/ProductPreview";
import Grid3x3 from "../components/wrappers/Grid3x3";

const smallDescriptionDummy =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla";
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Cards
          title="Cards Component"
          subtitle="Dummy Subtitle"
          text={smallDescriptionDummy}
        />
        <SimpleCard
          title="Simple Card Component"
          text={smallDescriptionDummy}
        />
        <FeatureCard
          title="Feature Card Component"
          bigtitle="Dummy Big Title"
          text={smallDescriptionDummy}
          card1Title="Card 1 Title"
          card2Title="Card 2 Title"
          card1Text={smallDescriptionDummy}
          card2Text={smallDescriptionDummy}
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
              <ProductPreview title="Product Preview" price="$150.99" text={smallDescriptionDummy}/>
              <ProductPreview title="Product Preview" price="$150.99" text={smallDescriptionDummy}/>
              <ProductPreview title="Product Preview" price="$150.99" text={smallDescriptionDummy}/>
              <ProductPreview title="Product Preview" price="$150.99" text={smallDescriptionDummy}/>
              <ProductPreview title="Product Preview" price="$150.99" text={smallDescriptionDummy}/>
              <ProductPreview title="Product Preview" price="$150.99" text={smallDescriptionDummy}/>
              <ProductPreview title="Product Preview" price="$150.99" text={smallDescriptionDummy}/>
            </React.Fragment>
          }
        />
        <ProductPreview title="Product Preview" price="$150.99" text={smallDescriptionDummy}/>
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
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
