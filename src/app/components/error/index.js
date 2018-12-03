import React from "react";

function Error({ msg }) {
    return (
        <section className="error">
            <h1>Something went wrong :(</h1>
            <p>{msg}</p>
            <p>Here is a cat for you</p>
            <img src="https://loremflickr.com/280/280/cat" alt="cat" />
        </section>
    );
}

export default Error;
