import React, { PureComponent } from "react";
import Header from "./Header";
import Main from "./Main";

class App extends PureComponent {
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
