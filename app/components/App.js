import React, { Component } from 'react';
import SlidesContainer from './Slides/SlidesContainer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="app-container" >
                <SlidesContainer />
            </div>
        );
    }
}

export default App;