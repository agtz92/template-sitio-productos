import React from "react";
import HalfHalf from "../wrappers/HalfHalf";
import Heading from "./Heading";
import PercentageDiv from "./PercentageDiv";
import { StaticImage } from "gatsby-plugin-image";
import background from "../../images/artworkbck.jpg";

const LandingSection2 = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
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
                src="../../images/logo.png"
                alt="background image"
              />
            <Heading h1 size="huge">
              LOS MEJORES PISOS
              <br /> PARA GIMNASIO
            </Heading>
            <Heading h2 color="color1" size="big">
              Renueva tu gimnasio y atrae más clientes
            </Heading>
            <p className="paragraph-regular">
              Somos fabricantes y distribuidores con más de 37 años de experiencia en venta y distribución a toda la República Mexicana
            </p>
            <button className="button-regular w-button bck-color1">
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
              <StaticImage
                placeholder="blurred"
                width={600}
                src="../../images/pisogym.png"
                alt="background image"
              />
            </div>
          </PercentageDiv>
        }
      />
    </div>
  );
};
export default LandingSection2;
