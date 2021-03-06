import React, {Component} from "react"
import "./Style/Badge.css"

class Badge extends Component{
    render(){
        return (
        <React.Fragment>
            <div className="Badge m-5">
                <div className="Badge__header">
                    <img src={this.props.header_picture} alt="header_background"/>
                </div>
                <div className="container mt-5 mb-1 Badge__userInfo">
                    <div className="Badge__userImage">
                        <img src={this.props.profile_picture} alt="Profile_picture" />
                    </div>
                    <h4 className="text-center">{this.props.name}
                    </h4>
                    <p className="text-center">{this.props.city}</p>
                </div>
                <div className="Badge__info container pt-3">
                    <div className="row">
                        <div className="col">
                            <h4 className="text-center fw bold">{this.props.age}</h4>
                            <p className="text-center">Age</p>
                        </div>
                        <div className="col">
                            <h4 className="text-center fw bold">{this.props.bets}</h4>
                            <p className="text-center">Bets</p>
                        </div>
                        <div className="col">
                            <h4 className="text-center fw bold">{this.props.state}</h4>
                            <p className="text-center">Years active</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}
export default Badge;