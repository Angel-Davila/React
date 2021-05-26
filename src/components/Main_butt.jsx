import "./Style/Main_butt.css"
import {Link} from "react-router-dom"
import React from "react"


const Button = (props) =>{
    return(
        <React.Fragment>
            <Link className="Button" to={props.link}>
                <p>{props.contentText}</p>
            </Link>
        </React.Fragment>
    )
}
export default Button