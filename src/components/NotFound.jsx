import './Style/NotFound.css';
import React from "react"

class Error extends React.Component{
    render(){
        return(
            <React.Fragment>
                <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png.webp" class="img_404"></img>
            </React.Fragment>
        );
    }
}
export default Error;