import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomepageHeaderComponent extends Component {

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
                        <input placeholder = "Email" name = "email"/>
                        <input placeholder = "Password" type="password" name = "password"/>
                        <Link to="/sightings" className="btn btn-warning">Log In</Link>
                        </div>
                        
                    </nav>

                </header>
                
            </div>
        )
    }
}

export default HomepageHeaderComponent