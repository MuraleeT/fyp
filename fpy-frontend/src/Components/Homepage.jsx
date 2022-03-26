import React, { Component } from 'react';
import HomepageHeaderComponent from './HomepageHeaderComponent';

class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }

    }

    render() {
        return (
            <div>
                <HomepageHeaderComponent/>
                <div>
                    <h1 class="p-5 text-center">Welcome to Safari Safe</h1>
                    <h5 class="pb-5 text-center">Animal Poaching Prevention for Safari Photographers</h5>
                    <img src="https://i.assetzen.net/i/p1qAeH8Hsq6M/w:1920/h:660/q:70.jpg" class="img-fluid rounded"></img>
                    <h5 class="p-5 text-center">Safari Safe is a place for photographers to share where they saw animals securely, without the worry that animal poachers wil take advantage. If you take photos with a digital camera, you may be helping poachers to track down and kill endangered species of animals when you share this photo online or with your friends. By using Safari Safe, you can be sure that your photos are not contributing to animal poaching.</h5>
                    <img src="https://static01.nyt.com/images/2020/09/02/travel/02safari/02safari-superJumbo.jpg" class="img-fluid rounded"></img>
                    <p class="text-center text-secondary">Muralee Tumber 2022</p>
                </div>
            </div>
        );
    }
}

export default Homepage;