import React, { PureComponent } from "react";
import Cats from "./Cats";

class Main extends PureComponent {
    render() {
        return (
            <main className="py-4">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">New Cats</h2>
                            </div>
                            <Cats />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">
                                    Neighbour&apos;s Cats
                                </h2>
                            </div>
                            <Cats />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;
