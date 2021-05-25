import React from "react"
import "./Style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://proyecta.utch.edu.mx/public/images/utch-b.png" alt="Logo" />
                </div>
            </React.Fragment>
        );
    }
} 
export default Header;