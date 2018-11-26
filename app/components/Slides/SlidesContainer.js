import React, { Component } from "react";
import Slide from "./Slide";
import "./SlidesContainer.css";

class SlidesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slidesPositions: [0, 100, 200, 300]
        };
    }

    moveSlide = delta => {
        let { slidesPositions } = this.state;
        let newSlidesPositions = [...slidesPositions];

        if (
            (delta > 0 && !slidesPositions[0]) ||
            (delta < 0 && !slidesPositions[slidesPositions.length - 1])
        )
            return;

        slidesPositions.forEach(function (item, i) {
            newSlidesPositions[i] = item + delta;
        });
        this.setState({ slidesPositions: newSlidesPositions });
    };

    changeSlides = e => {
        if (e.key === "ArrowLeft") {
            this.moveSlide(100);
        }
        if (e.key === "ArrowRight") {
            this.moveSlide(-100);
        }
    };

    wheelSlides = e => {
        if (e.deltaY > 0) {
            this.moveSlide(-100);
        }
        if (e.deltaY < 0) {
            this.moveSlide(100);
        }
    };

    goToSlide = i => {
        let slideNumber = this.state.slidesPositions.indexOf(0);
        let diffs = slideNumber - i;
        this.moveSlide(diffs * 100);
    }

    renderDot = (item, i) => {
        return <div className="dot" onClick={this.goToSlide.bind(this, i)} style={{ color: item ? 'black' : 'white' }}>{"."}</div>
    }

    render() {
        let { slidesPositions } = this.state;

        return (
            <div
                className="slides-module-container"
                onKeyDown={this.changeSlides}
                onWheel={this.wheelSlides}
                tabIndex="0"
            >
                {slidesPositions[0] && (
                    <div
                        className="arrow leftArrow"
                        onClick={this.moveSlide.bind(this, 100)}
                    >
                        {"<"}
                    </div>
                )}
                <Slide
                    left={`${slidesPositions[0]}%`}
                    title="First Slide"
                    color="#FCB900"
                />
                <Slide
                    left={`${slidesPositions[1]}%`}
                    title="Second Slide"
                    color="#7BDCB5"
                />
                <Slide
                    left={`${slidesPositions[2]}%`}
                    title="Third Slide"
                    color="#ba68c8"
                />
                <Slide
                    left={`${slidesPositions[3]}%`}
                    title="Four Slide"
                    color="#8bc34a"
                />
                {slidesPositions[slidesPositions.length - 1] && (
                    <div
                        className="arrow rightArrow"
                        onClick={this.moveSlide.bind(this, -100)}
                    >
                        {">"}
                    </div>
                )}
                <div className="dots">
                    {slidesPositions.map(this.renderDot)}
                </div>
            </div>
        );
    }
}

export default SlidesContainer;
