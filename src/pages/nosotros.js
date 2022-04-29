import React from "React";
import Layout from "../components/layouts/Layout";
import FeatureCard from "../components/symbols/FeatureCard";

const Nosotros = () => {
  return (
    <Layout>
      <FeatureCard
        title="¿Quiénes somos?"
        bigtitle="37 Años de Experiencia"
        text="En MatMarkt tenemos 37 años de experiencia fabricando y distribuyendo productos de hule industrial para minoristas y mayoristas siempre con la mejor calidad y precio del mercado"
        card1Title="Fabricantes"
        card2Title="Distribuidores"
        card1Text="Somos fabricantes de productos de hule siempre enfocándonos en mejora continua. Podemos manejar desde productos comerciales hasta los requerimientos más específicos de nuestros clientes"
        card2Text="Distribuimos desde el pedido más pequeño hasta el más grande según tus necesidades. Tenemos envíos gratis* dentro de la ciudad de México y zona metropolitana y también la ciudad de Querétaro. Enviamos a todo el país"
      />
    </Layout>
  );
};

export default Nosotros;
