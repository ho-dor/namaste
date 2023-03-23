import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1', {id:'heading'}, "Hello World React");
const nestedDOM = React.createElement('div', {}, React.createElement("div", {id:"parent"}, React.createElement("h1", {id:"child"}, "this is h1 tag")));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nestedDOM);
console.log(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)
