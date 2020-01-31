var appRoot = document.getElementById('root');
var template = React.createElement("p",
                                   {"id" : "IdP",
                                    "className" : "classP"
                                   }, 
                                   "DOM from React js");
ReactDOM.render(template, appRoot);
