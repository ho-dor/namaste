const heading = React.createElement('h1', {id:'heading'}, "Hello World React");
const nestedDOM = React.createElement('div', {}, React.createElement("div", {id:"parent"}, React.createElement("h1", {id:"child"}, "this is h1 tag")));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nestedDOM);