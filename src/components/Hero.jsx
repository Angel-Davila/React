import React from "react"
import "./Style/Hero.css"

const Hero = (props) =>{
    return (
        <React.Fragment>
        <div className="Hero">
            <div className="Hero__color" style={{height: props.h}}></div>
            <div className="Hero__img" style={{height: props.h}}>
                <img src={props.picture} alt=""/>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Hero;