import React from "react"
import Hero from "../../components/Hero"
import Button from "../../components/Main_butt"
import "./Main.css"


const Main = (props) => {
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Welcome"}</h1>
                    <Button contentText={"Login"} link={"/new"}></Button>
                </div>
                <Hero h={"88vh"} picture={"https://images.pexels.com/photos/262333/pexels-photo-262333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}></Hero>
            </div>
        </React.Fragment>
    )
}

export default Main 