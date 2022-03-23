import React, { Component, useCallback } from 'react';
import SightingService from '../services/SightingService';
import { Link } from 'react-router-dom';

class ListSightingComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sightings: []
        }
        
    }

    componentDidMount(){

        SightingService.getSightings().then((res) => {

            this.setState({sightings: res.data});

        });

    }

    render() {
        return (
            <div>
                
                <h2 className = "text-center p-4">Sightings</h2>

                <div className = "row">
                    
                </div>

                <div className = "row">

                    <table className = "table table-striped table-bordered">

                        <thead>

                            <tr>
                                <th>Animal</th>
                                <th>Area</th>
                                <th>Location</th>
                                <th>Time</th>
                                <th>Photographer ID</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.sightings.map(
                                    sighting =>
                                    <tr key={sighting.id}>
                                        <td> {sighting.animal}</td>
                                        <td> {sighting.area}</td>
                                        <td> {sighting.location}</td>
                                        <td> {sighting.time}</td>
                                        <td> {sighting.userId}</td>
                                    </tr>
                                )
                            }

                        </tbody>


                    </table>

                </div>

            </div>
        );
    }
}

export default ListSightingComponent;