import React, { Component } from 'react';
import './styles/slide.css';

class Slide extends Component {
               
    render() {
        return (
            <div className="slide-container" style={{backgroundColor: this.props.color, left: this.props.left}}>         
                <h1 className="slide-title">{this.props.title}</h1>
            </div>
            );
    }
}

Slide.defaultProps = {
    title: 'Default Slide',
    color: "#ffeb3b",
    left: 0
}
 
export default Slide;