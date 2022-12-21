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

        this.feedCat = this.feedCat.bind(this);
    }

    componentDidMount(): void {
        this.intervalId = setInterval(() => {
            this.generateRandomCat();
        }, 5000);
    }

    componentWillUnmount(): void {
        clearInterval(this.intervalId);
        this.state.cats.forEach((cat) => clearTimeout(cat.timeoutId));
    }

    protected feedCat(id: number) {
        clearTimeout(this.state.cats.find((cat) => cat.id === id)?.timeoutId);

        this.setState((prevState) => {
            return {
                cats: prevState.cats.map((cat) =>
                    cat.id === id ? { ...cat, isHungry: false } : cat
                )
            };
        });

        this.startFeedingCat(id);
    }

    protected generateRandomCat() {
        const newCat = getCat();
        const cats: Cat[] = [...this.state.cats, newCat];
        this.setState({ cats });
        this.startFeedingCat(newCat.id);
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
                            <Cats
                                type="new"
                                feedCat={this.feedCat}
                                cats={this.state.cats}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">
                                    Neighbour&apos;s Cats
                                </h2>
                            </div>
                            <Cats
                                feedCat={this.feedCat}
                                type="owned"
                                cats={this.state.cats}
                            />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;
