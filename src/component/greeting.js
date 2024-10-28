import React from "react";

function Greeting(props) {
    const {name} = props;
    return(
        <>
        <h2>Hello, {name}! Welcome to React!</h2>
        </>
    )
}

export default Greeting ;