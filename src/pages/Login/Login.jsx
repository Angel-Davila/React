import React from "react"
import Hero from "../../components/Hero"
import "../Login/style/Login.css"

class Login extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="BadgeForm m 5 ">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Email
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="name" 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Password
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="city" 
                            />
                            <button type="submit" className="Submit__button">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
export default Login;