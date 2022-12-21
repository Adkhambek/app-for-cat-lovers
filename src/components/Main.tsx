import React, { useEffect, useState } from "react";
import Cats from "./Cats";
import { Cat } from "../types";
import getCat from "../helpers";

let intervalId: undefined | ReturnType<typeof setInterval>;

const Main = () => {
    const [cats, setCat] = useState<Cat[]>([]);

    useEffect(() => {
        intervalId = setInterval(() => {
            generateRandomCat();
        }, 5000);

        return () => {
            setCat([]);
            clearTimeout(intervalId);
            cats.forEach((cat) => clearTimeout(cat.timeoutId));
        };
    }, []);

    const generateRandomCat = () => {
        const newCat = getCat();
        setCat((prevCats) => [...prevCats, newCat]);

        startFeedingCat(newCat.id);
    };

    const startFeedingCat = (id: number) => {
        const timeoutId = setTimeout(() => showFood(id), 30000);

        setCat((prevCats) => {
            return prevCats.map((cat) =>
                cat.id === id ? { ...cat, timeoutId } : cat
            );
        });
    };

    const showFood = (id: number) => {
        const timeoutId = setTimeout(() => deleteUnfeededCat(id), 5000);

        setCat((prevCats) => {
            return prevCats.map((cat) =>
                cat.id === id ? { ...cat, isHungry: true, timeoutId } : cat
            );
        });
    };

    const deleteUnfeededCat = (id: number) => {
        setCat((prevCats) => {
            return prevCats.filter((cat) => cat.id !== id);
        });
    };

    const feedCat = (id: number) => {
        clearTimeout(cats.find((cat) => cat.id === id)?.timeoutId);
        setCat((prevCats) => {
            return prevCats.map((cat) =>
                cat.id === id ? { ...cat, isHungry: false } : cat
            );
        });

        startFeedingCat(id);
    };

    return (
        <main className="py-4">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="text-center">New Cats</h2>
                        </div>
                        <Cats isOwned={false} feedCat={feedCat} cats={cats} />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="text-center">
                                Neighbour&apos;s Cats
                            </h2>
                        </div>
                        <Cats feedCat={feedCat} isOwned={true} cats={cats} />
                    </div>
                </div>
            </div>
        </main>
    );
};

// class Main extends Component<{}, { cats: Cat[] }> {
//     protected intervalId: undefined | ReturnType<typeof setInterval> =
//         undefined;

//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             cats: []
//         };

//         this.feedCat = this.feedCat.bind(this);
//     }

//     componentDidMount(): void {
//         this.intervalId = setInterval(() => {
//             this.generateRandomCat();
//         }, 5000);
//     }

//     componentWillUnmount(): void {
//         clearInterval(this.intervalId);
//         this.state.cats.forEach((cat) => clearTimeout(cat.timeoutId));
//     }

//     protected feedCat(id: number) {
//         clearTimeout(this.state.cats.find((cat) => cat.id === id)?.timeoutId);

//         this.setState((prevState) => {
//             return {
//                 cats: prevState.cats.map((cat) =>
//                     cat.id === id ? { ...cat, isHungry: false } : cat
//                 )
//             };
//         });

//         this.startFeedingCat(id);
//     }

//     protected generateRandomCat() {
//         const newCat = getCat();
//         const cats: Cat[] = [...this.state.cats, newCat];
//         this.setState({ cats });
//         this.startFeedingCat(newCat.id);
//     }

//     protected startFeedingCat(id: number) {
//         const timeoutId = setTimeout(() => this.showFood(id), 30000);

//         this.setState((prevState) => ({
//             cats: prevState.cats.map((cat) =>
//                 cat.id === id ? { ...cat, timeoutId } : cat
//             )
//         }));
//     }

//     protected showFood(id: number) {
//         const timeoutId = setTimeout(() => this.deleteUnfeededCat(id), 5000);

//         return this.setState((prevState) => ({
//             cats: prevState.cats.map((cat) =>
//                 cat.id === id ? { ...cat, isHungry: true, timeoutId } : cat
//             )
//         }));
//     }

//     protected deleteUnfeededCat(id: number) {
//         return this.setState((prevState) => ({
//             cats: prevState.cats.filter((cat) => cat.id !== id)
//         }));
//     }

//     render() {
//         return (
//             <main className="py-4">
//                 <div className="row row-cols-1 row-cols-md-2 g-4">
//                     <div className="col">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h2 className="text-center">New Cats</h2>
//                             </div>
//                             <Cats
//                                 isOwned={false}
//                                 feedCat={this.feedCat}
//                                 cats={this.state.cats}
//                             />
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h2 className="text-center">
//                                     Neighbour&apos;s Cats
//                                 </h2>
//                             </div>
//                             <Cats
//                                 feedCat={this.feedCat}
//                                 isOwned={true}
//                                 cats={this.state.cats}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         );
//     }
// }

export default Main;
