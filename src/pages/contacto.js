import React from "react";
import Layout from "../components/layouts/Layout";
import Cards from "../components/symbols/Cards";
import ContactForm from "../components/symbols/ContactForm";
import LandingSection from "../components/symbols/LandingSection";
import Container from "../components/wrappers/Container";
import HalfHalf from "../components/wrappers/HalfHalf";

const Contacto = () => {
  const datos =
    "POPOCATEPETL 42<br>COLONIA SAN JAVIER CP 54030<br>Tlalnepantla de Baz.";
  return (
    <Layout>
      <LandingSection>
        <ContactForm darkmodetext></ContactForm>
      </LandingSection>
      <HalfHalf
        extraclass="padding"
        left={
          <React.Fragment>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=popocatepetl%2042%20colonia%20san%20javier&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </React.Fragment>
        }
        right={
          <React.Fragment>
            <Cards
              subtitle="Nuestras oficinas"
              text={
                <p>
                  POPOCATEPETL 42<br></br>
                  COLONIA SAN JAVIER<br></br>
                  CP 54030<br></br>
                  Tlalnepantla de Baz.
                </p>
              }
            ></Cards>
            <Cards
              subtitle="Teléfonos"
              text={
                <div>
                  <a href="tel:(55) 8848 - 6911">(55) 8848 - 6911</a><p><br></br></p>
                  <a href="tel:(55) 8848 - 5742">(55) 8848 - 5742</a>
                </div>
              }
            ></Cards>
            <Cards
              subtitle="Horario"
              text="9AM a 6PM Lunes a Viernes"
            ></Cards>
          </React.Fragment>
        }
      />
    </Layout>
  );
};
export default Contacto;
