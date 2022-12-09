import React, { Component } from "react";
import Cats from "./Cats";
import { Cat } from "../types";
import getCat from "../helpers";

class Main extends Component<{}, { cats: Cat[] }> {
    protected interval: undefined | ReturnType<typeof setInterval> = undefined;
    constructor(props: {}) {
        super(props);
        this.state = {
            cats: []
        };
    }

    componentDidMount(): void {
        this.interval = setInterval(() => {
            const cats: Cat[] = [...this.state.cats, getCat()];
            this.setState({ cats });
        }, 5000);
    }

    componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    render() {
        return (
            <main className="py-4">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">New Cats</h2>
                            </div>
                            <Cats type="new" cats={this.state.cats} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">
                                    Neighbour&apos;s Cats
                                </h2>
                            </div>
                            <Cats type="owned" cats={this.state.cats} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;
