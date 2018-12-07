import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { removeError } from "../../redux/actions";

let listening = false;

function HandleError({ error, children, history, removeError }) {
    if (error) {
        if (!listening) {
            listening = true;
            let stopListening = history.listen(() => {
                stopListening();
                listening = false;
                removeError();
            });
        }
        if (typeof error !== "string") {
            error = "unexpected error occured";
        }
        return (
            <section className="error">
                <h1>Something went wrong :(</h1>
                <p>{error}</p>
                <p>Here is a cat for you</p>
                <img src="https://loremflickr.com/280/280/cat" alt="cat" />
            </section>
        );
    }
    return children;
}

function mapStateToProps(state) {
    return {
        error: state.error.errorString
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeError }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HandleError));
