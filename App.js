import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1', {id:'heading'}, "Hello World React");
const nestedDOM = React.createElement('div', {}, React.createElement("div", {id:"parent"}, React.createElement("h1", {id:"child"}, "this is h1 tag")));

const nestedHeader = React.createElement('div', {class:'title'}, React.createElement('h1', {}, React.createElement('h2', {}, React.createElement('h3', {}, 'Nested Header Component'))));

const Heading2 = () => <h1>This is jsx</h1>;

const FirstFunctionalComponent = () => {
    
    return (
        <>
            <Heading2 />
            <h1>This is a functional Component</h1>
        </>
    )
}

const NestedHeaderJSX = () => {
    return (
        <div className='title'><h1><h2><h3>Nested header using JSX</h3></h2></h1></div>
    )
}

const TopHeaderComponent = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>Logo</p>
            <input placeholder='search'/>
            {/* <img src='icon-user'/> */}
            <p>User Icon</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(TopHeaderComponent());



