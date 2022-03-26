import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }

    }

    render() {
        return (
            <div>
                
                <header>

                    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">

                        <div><a href = "/" className="text-dark navbar-brand text-center px-4">Safari Safe</a></div>

                        <div className="position-absolute end-0 px-4">
                        <Link to="/sightings" className="btn btn-warning">Sightings</Link>
                        <Link to="/add-sighting" className="btn btn-warning">Add Sighting</Link>
                        <Link to="/users" className="btn btn-warning">Users</Link>
                        <Link to="/remove-metadata" className="btn btn-warning">Remove Metadata</Link>
                        <Link to="/" className="btn btn-warning">Log Out</Link>
                        </div>

                    </nav>

                </header>
                
            </div>
        )
    }
}

export default HeaderComponent