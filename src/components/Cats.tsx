import React, { Component } from "react";
import ownedCat from "../images/cat.png";
import newCat from "../images/cry.png";
import catFood from "../images/pet-food.png";
import { ReactComponent as Paw } from "../images/paw.svg";

class Cats extends Component {
    render() {
        return (
            <ul
                style={{ height: "420px" }}
                className="list-group list-group-flush overflow-scroll overflow-auto"
            >
                <li className="list-group-item d-flex align-items-center position-relative">
                    <div className="position-absolute bg-dark bg-opacity-25 top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                        <button className="btn">
                            <img src={catFood} width="60" alt="" />
                        </button>
                    </div>
                    <img
                        width="60"
                        src={ownedCat}
                        alt="collar"
                        className="img-fluid"
                    />
                    <div className="cat-info ms-2">
                        <h3 className="cat-name h4 mb-0">Hanna</h3>
                        <p className="cat-age mb-0">1 years old</p>
                    </div>
                    <Paw
                        style={{
                            height: "60px",
                            width: "60px"
                        }}
                        className="ms-auto"
                        fill="#000"
                    />
                </li>
                <li className="list-group-item d-flex align-items-center position-relative">
                    <div className="position-absolute bg-dark bg-opacity-25 top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                        <button className="btn">
                            <img src={catFood} width="60" alt="" />
                        </button>
                    </div>
                    <img
                        width="60"
                        src={newCat}
                        alt="collar"
                        className="img-fluid"
                    />
                    <div className="cat-info ms-2">
                        <h3 className="cat-name h4 mb-0">Hanna</h3>
                        <p className="cat-age mb-0">1 years old</p>
                    </div>
                    <Paw
                        style={{
                            height: "60px",
                            width: "60px"
                        }}
                        className="ms-auto"
                        fill="#000"
                    />
                </li>
            </ul>
        );
    }
}

export default Cats;
