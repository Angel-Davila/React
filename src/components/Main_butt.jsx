import React from "react"
import "./Style/Main_butt.css"

const Button = props =>{
    return(
        <React.Fragment>
            <a className="Button">
                <p>{props.contentText}</p>
            </a>
        </React.Fragment>
    )
}
export default Button