import React from "react"
import "./Style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://image.flaticon.com/icons/png/512/2316/2316749.png" alt="Logo" />
                </div>
            </React.Fragment>
        );
    }
} 
export default Header;