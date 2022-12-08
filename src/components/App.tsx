import React, { Component } from "react";
import { Cat } from "../types";

export default class App extends Component<{}, { cats: Cat[] }> {
    constructor (props: {}) {
        super(props);
        this.state = {
            cats: []
        };
    }

    render () {
        return <h1>Cat lovers</h1>;
    }
}
