import React, { Component } from 'react';
import UserService from '../services/UserService';
import HeaderComponent from './HeaderComponent';

class ListUserComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
        
    }

    componentDidMount(){

        UserService.getUsers().then((res) => {

            this.setState({users: res.data});

        });

    }

    render() {
        return (
            <div>
                <HeaderComponent />
                
                <h2 className = "text-center p-4">Users</h2>

                <div className = "row">
                    
                </div>

                <div className = "row">

                    <table className = "table table-striped table-bordered">

                        <thead>

                            <tr>
                                <th>User ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key={user.id}>
                                        <td> {user.id}</td>
                                        <td> {user.firstname}</td>
                                        <td> {user.lastname}</td>
                                        <td> {user.email}</td>
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

export default ListUserComponent;