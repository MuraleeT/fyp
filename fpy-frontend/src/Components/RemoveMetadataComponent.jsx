import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

class RemoveMetadataComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }

    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className= "container">
                    <div className= "row">
                        <div className= "card col-md-6 offset-md-3">

                            <h2 className = "text-center pt-5">Remove Metadata</h2>

                            <div className= "card-body">
                                <form>
                                    <div class="form-group p-3">
                                        <label className="">Upload Photo</label>
                                        <input accept="image/png, image/jpeg" type="file" class="form-control"></input>
                                    </div>

                                    <Link to="/sightings" className="btn btn-success">Remove Metadata</Link>
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

export default RemoveMetadataComponent;