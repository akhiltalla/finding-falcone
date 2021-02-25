import React, { Component } from 'react';
import './header.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

class Header extends Component {
    constructor(props){
        super(props);
    }
    onClick = () =>{
        this.setState({
            vehicles: [],
            planets: [],
            dataHasBeenLoaded: false,
            totalTime: null,
            token: null,
            showLoader: false
        });
    }
    render() {
        return (
            <>
                 <div class="header">
                    <div class="header-container">
                        <nav>
                            {/* <a onClick={this.onClick}>Home</a>
                            <a onClick={this.onClick}>Reset</a> */}
                        </nav>
                       
                    </div>
                </div>
            </>
        )
    }
}

export default Header;
