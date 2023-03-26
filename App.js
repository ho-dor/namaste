import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1', {id:'heading'}, "Hello World React");
const nestedDOM = React.createElement('div', {}, React.createElement("div", {id:"parent"}, React.createElement("h1", {id:"child"}, "this is h1 tag")));



const Heading2 = () => <h1>This is jsx</h1>;

const FirstFunctionalComponent = () => {
    
    return (
        <>
            <Heading2 />
            <h1>This is a functional Component</h1>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FirstFunctionalComponent/>);



