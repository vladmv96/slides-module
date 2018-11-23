import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
 
const propsValues = {
    title: "First Slide"
};
 
ReactDOM.render(
    <App data={propsValues} />,
    document.getElementById("root")
)