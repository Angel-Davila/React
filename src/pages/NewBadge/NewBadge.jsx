import React from "react";
import Hero from "../../components/Hero";
import Badge from "../../components/Badge";
import BadgeForm from "../../components/BadgeForm";
import "./NewBadge.css";





class NewBadge extends React.Component{
    
    state = {
        loading : false,
        error: null,
        form:{
            header_picture: "",
            profile_picture: "",
            name: "",
            age: "",
            city: "",
            bets: "",
            state: ""
        },
    };

    handleChange = event =>{
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        this.setState({loading:true, error:null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/")
        } catch(error){
            this.setState({loading:false, error: error})
            
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                header_picture = {this.state.form.header_picture  ||  "https://images.pexels.com/photos/7594614/pexels-photo-7594614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                                profile_picture = {this.state.form.profile_picture || "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                                name = {this.state.form.name || "Lucas Willhem"}
                                age = {this.state.form.age || "27"}
                                city = {this.state.form.city || "Madrid"}
                                bets = {this.state.bets || "2,000"}
                                state = {this.state.state || "12"}
                            ></Badge>
                        </div>     
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handlSubmit}
                                formValues={this.state.form}>   

                            </BadgeForm>
                        </div>         
                    </div>    
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge;
