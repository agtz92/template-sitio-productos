import React from "react"
import Layout from "../components/layouts/Layout"
import Div5050 from "../components/wrappers/Div5050"
import Cards from "../components/symbols/Cards"
//Generic Styles
import "../webflow_styles/normalize.css"
import "../webflow_styles/webflow.css"

const Product = () =>{
    const smallDescriptionDummy =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla";

return(
    <Layout>
        <Div5050
                
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
    </Layout>
);
}

export default Product;