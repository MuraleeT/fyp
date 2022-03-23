import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SightingService from '../services/SightingService';
import { BrowserRouter, Route } from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class CreateSightingComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            animal: '',
            area: '',
            location: '',
            time: Date().toLocaleString(),
            userId: '3',
        }
        this.changeAnimalHandler = this.changeAnimalHandler.bind(this);
        this.changeAreaHandler = this.changeAreaHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);

        this.sendSighting = this.sendSighting.bind(this);

    }


    sendSighting = (e) => {

        e.preventDefault();

        let sighting = {animal: this.state.animal, area: this.state.area, location: this.state.location, time: this.state.time, userID:this.state.userId};
        console.log('sighting => ' + JSON.stringify(sighting));

        SightingService.createSighting(sighting).then(res =>{

            window.location = '/sightings';

        }).catch((error) => {
            // here you will have access to error.response
            console.log(error.response)
        });

    }

    changeAnimalHandler = (event) => {

        this.setState({animal: event.target.value});

    }

    changeAreaHandler = (event) => {

        this.setState({area: event.target.value});

    }

    changeLocationHandler = (event) => {

        this.setState({location: event.target.value});

    }

    render() {
        return (
            <div>
                <div className= "container">
                    <div className= "row">
                        <div className= "card col-md-6 offset-md-3">

                            <h2 className = "text-center p-4">Add Sightings</h2>

                            <div className= "card-body">

                                <form>
                                    <div className = "form-group p-3">
                                        <label className="py-3">Animal</label> 
                                        <input placeholder = "Animal" name = "animal" className = "form-control" value={this.state.animal} onChange={this.changeAnimalHandler}/>
                                        <label className="py-3">Area</label> 
                                        <input placeholder = "Area" name = "area" className = "form-control" value={this.state.area} onChange={this.changeAreaHandler}/>
                                        <label className="py-3">Location</label> 
                                        <input placeholder = "Location" name = "location" className = "form-control" value={this.state.location} onChange={this.changeLocationHandler}/>

                                    </div>

                                    <button className="btn btn-success" onClick = {this.sendSighting}>Add Sighting</button>
                                    <Link to="/sightings" className="btn btn-danger">Cancel</Link>

                                </form>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateSightingComponent;