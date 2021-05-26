import React from "react"
import "./Style/Header.css"
import {Link} from "react-router-dom"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="https://image.flaticon.com/icons/png/512/2316/2316749.png" alt="Logo" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
} 
export default Header;