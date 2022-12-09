import React, { Component } from "react";
import Cats from "./Cats";
import { Cat } from "../types";
import getCat from "../helpers";

class Main extends Component<{}, { cats: Cat[] }> {
    protected intervalId: undefined | ReturnType<typeof setInterval> =
        undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            cats: []
        };
    }

    componentDidMount(): void {
        this.intervalId = setInterval(() => {
            const newCat = getCat();
            const cats: Cat[] = [...this.state.cats, newCat];
            this.setState({ cats });
            this.startFeedingCat(newCat.id);
        }, 5000);
    }

    componentWillUnmount(): void {
        clearInterval(this.intervalId);
        this.state.cats.forEach((cat) => clearTimeout(cat.timeoutId));
    }

    protected startFeedingCat(id: number) {
        const timeoutId = setTimeout(() => {
            const timeoutId = setTimeout(() => {
                this.setState((prevState) => ({
                    cats: prevState.cats.filter((cat) => cat.id !== id)
                }));
            }, 5000);

            this.setState((prevState) => ({
                cats: prevState.cats.map((cat) =>
                    cat.id === id ? { ...cat, isHungry: true, timeoutId } : cat
                )
            }));
        }, 30000);

        this.setState((prevState) => ({
            cats: prevState.cats.map((cat) =>
                cat.id === id ? { ...cat, timeoutId } : cat
            )
        }));
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
