import React, { Component } from 'react';
import Slide from './Slide';
import './styles/app.css' ;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            slidesPositions: [-100, 0, 100]
        }
    }

    moveSlide = (delta) => {
        let { slidesPositions } = this.state;
        let newSlidesPositions = [...slidesPositions];

        if (delta > 0 && slidesPositions[0] === 0 || delta < 0 && slidesPositions[slidesPositions.length - 1] === 0) return;
        
        slidesPositions.forEach(function(item, i) {
            newSlidesPositions[i] = item + delta;
        })
        this.setState({slidesPositions: newSlidesPositions})
    }
 
    changeSlides = (e) => {
        if (e.key === 'ArrowLeft') {
            this.moveSlide(100);
        }
        if (e.key === 'ArrowRight') {
            this.moveSlide(-100);
        }
    }

    wheelSlides = (e) => {
        if (e.deltaY > 0) {
            this.moveSlide(100);
        }
        if (e.deltaY < 0) {
            this.moveSlide(-100);
        }
    }
               
    render() {
        return (
            <div className="app-container" onKeyDown={this.changeSlides} onWheel={this.wheelSlides} tabIndex="0">
                <h1 className="arrow leftArrow" onClick={this.moveSlide.bind(this, 100)}>{"<"}</h1>      
                <Slide left={`${this.state.slidesPositions[0]}vw`} title="First Slide" color="#FCB900" />
                <Slide left={`${this.state.slidesPositions[1]}vw`} title="Second Slide" color="#7BDCB5" />
                <Slide left={`${this.state.slidesPositions[2]}vw`} title="Third Slide" color="#ba68c8" />
                <h1 className="arrow rightArrow" onClick={this.moveSlide.bind(this, -100)}>{">"}</h1>  
            </div>
            );
    }
}
 
export default App;