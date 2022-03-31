import React from "react"
import "../../webflow_styles/symbols/contactform.css"
import Heading from "./Heading";

const ContactForm = (props) =>{

    return(
        
        <div className={`contact-form w-container ${props.darkmode ? " darkmode" : ""} ${props.darkmodetext ? " darkmode-text" : ""}`}>
          <Heading h2 alignment="center" color="darkmode-text">Contáctanos</Heading>
          <p>Indícanos el producto que buscas y nosotros nos pondremos en contacto contigo <strong>Lo más rápido posible</strong></p>
          <div id="formInstructions" className="small-text"><em>Campos con asterisco (*) son obligatorios.</em></div>
          <div className="">
            <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Wf Form Contact Form" method="get" data-netlify="true">
              <div className="contact-form-grid">
                <div id="w-node-_3088c118-2c7e-bfc0-8285-96b6a9bffd67-3923db54" className="div-form"><label for="First-Name" id="contact-first-name">Nombre *<input type="text" className="w-input" maxlength="256" name="First-Name" data-name="First Name" placeholder="" id="First-Name" required=""/></label></div>
                <div id="w-node-_3088c118-2c7e-bfc0-8285-96b6a9bffd6b-3923db54" className="div-form"><label for="Last-Name" id="contact-last-name">Compañía <input type="text" className="w-input" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="" id="Last-Name"/></label></div>
                <div id="w-node-_3088c118-2c7e-bfc0-8285-96b6a9bffd6f-3923db54" className="div-form"><label for="Email" id="contact-email">Email *<input type="email" className="w-input" maxlength="256" name="Email" data-name="Email" placeholder="" id="Email" required=""/></label></div>
                <div id="w-node-_3088c118-2c7e-bfc0-8285-96b6a9bffd73-3923db54" className="div-form"><label for="Contact-Phone-Number" id="contact-phone">Teléfono o Whatsapp<input type="tel" className="w-input" maxlength="256" name="Contact-Phone-Number" data-name="Contact Phone Number" placeholder="" id="Contact-Phone-Number"/></label></div>
                <div id="w-node-_3088c118-2c7e-bfc0-8285-96b6a9bffd77-3923db54" className="div-form"><label for="Message" id="contact-message">Mensaje<textarea data-name="Message" maxlength="5000" id="Message" name="Message" placeholder="" className="textarea w-input"></textarea></label></div>
              </div><input type="submit" value="Enviar" data-wait="Por favor espera..." className="button-regular w-button bck-color1"/>
            </form>
          </div>
        </div>
    );

}

export default ContactForm;