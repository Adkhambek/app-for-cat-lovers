import React, { Component } from "react";
import { catsListInterface } from "../types";
import ownedCat from "../images/cat.png";
import newCat from "../images/cry.png";
import catFood from "../images/pet-food.png";
import { ReactComponent as Paw } from "../images/paw.svg";

class Cats extends Component<catsListInterface> {
    render() {
        let cats;
        if (this.props.isOwned as boolean) {
            cats = this.props.cats.filter((cat) => !cat.hasCollar);
        } else {
            cats = this.props.cats;
        }
        return (
            <ul
                style={{ height: "420px", overflowY: "auto" }}
                className="list-group list-group-flush"
            >
                {cats.map((cat) => (
                    <li
                        key={cat.id}
                        className="list-group-item d-flex align-items-center position-relative"
                    >
                        <div
                            className={
                                cat.isHungry
                                    ? "position-absolute bg-dark bg-opacity-25 top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center"
                                    : "d-none"
                            }
                        >
                            <button
                                className="btn"
                                onClick={() => this.props.feedCat(cat.id)}
                            >
                                <img src={catFood} width="60" alt="" />
                            </button>
                        </div>
                        <img
                            width="60"
                            src={cat.hasCollar ? ownedCat : newCat}
                            alt="collar"
                            className="img-fluid"
                        />
                        <div className="cat-info ms-2">
                            <h3 className="cat-name h4 mb-0">{cat.name}</h3>
                            <p className="cat-age mb-0">{cat.age} years old</p>
                        </div>
                        <Paw
                            style={{
                                height: "60px",
                                width: "60px"
                            }}
                            className="ms-auto"
                            fill={cat.color}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}

export default Cats;
