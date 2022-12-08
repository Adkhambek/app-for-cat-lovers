import React, { Component } from "react";
import { Cat } from "../types";
import Header from "./Header";
import Main from "./Main";

class App extends Component<{}, { cats: Cat[] }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            cats: []
        };
    }

    render() {
        return (
            <>
                <Header />
                <Main />
            </>
        );
    }
}

export default App;

// one class in one file
// use Pure Components
// public protected for methods
