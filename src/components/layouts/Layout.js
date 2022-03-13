import React from "react"
import Footer from "../symbols/Footer";
import NewNavBar from "../symbols/NewNavBar";
import "../../styles/colors.css"

const Layout = ({children}) =>{
    return(
        <React.Fragment>
            <NewNavBar sticky />
            {children}
            <Footer/>
        </React.Fragment>
    );
}

export default Layout;