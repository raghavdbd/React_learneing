import React from "react";
import ReactDOM from "react-dom/client";


const heading1=React.createElement(
"h1",
{
    id:"title"
    
},
"Heading"



)

const heading2=React.createElement(
    "h1",
    {
        id:"title"
        
    },
    "Heading"
    
    
    
    )

    const container=React.createElement(
        "div",
        {
            id:"Container"
        },
        [heading1,heading2]
    )

    const root= ReactDOM.createRoot(document.getElementById("root"));


    root.render(container)

