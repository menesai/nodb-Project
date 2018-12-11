import React, {Component} from 'react';
import axios from 'axios';
import List from './List'



class Activities extends Component{
    constructor(){
        super();
        this.state ={
            Facts: [],
            Observing: "",
            Date: "",
            Name: "",
            Profile: "",
            Title: ""
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3003/api/activities/')
        .then(response =>{
            // console.log(response);
            this.setState({Facts: response.data})
        })
    }

    addfact = () => {
        axios.post('http://localhost:3003/api/activities/',{
                observing_mode: this.state.Observing,
                creation_date: this.state.Date,
                target_name: this.state.Name,
                profile: this.state.Profile,
                title: this.state.Title
             })
        .then(response =>{
            this.setState({Facts: response.data})
        }) 
    }


    removefact = (id) =>{
        console.log(id)
        axios.delete(`http://localhost:3003/api/activities/${id}`)
        .then(response => {
            this.setState({Facts: response.data})
        })
    }

    updateinput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        let dispfacts= this.state.Facts.map((fact, index) =>{
            return <List
                key={fact.id}
                id={fact.id}
                observing_mode={fact.observing_mode}
                creation_date={fact.creation_date}
                target_name={fact.target_name}
                profiles={fact.profile}
                instrument_name={fact.instrument_name}
                titles={fact.title}
                removefact={this.removefact}
                
            />
        })
         console.log(this.state.Facts);
        
        return(
            <div className="factdisp">
            <div className="create">
            <input name="Date" placeholder="Date" value={this.state.Date} onChange={(e) => this.updateinput(e)}/>
            <input name="Observing" placeholder="observing" value={this.state.Observing} onChange={(e) => this.updateinput(e)}/>
            <input name="Name" placeholder="Name" value={this.state.Name} onChange={(e) => this.updateinput(e)}/>
            <input name="Profile" placeholder="Profile" value={this.state.Profile} onChange={(e) => this.updateinput(e)}/>
            <input name="Title" placeholder="Title" value={this.state.Title} onChange={(e) => this.updateinput(e)}/>
            <button className="addfacts" onClick={ this.addfact}>Add</button>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="facts">
            {dispfacts}
            </div>
            </div>
        );

    }
}

export default Activities;