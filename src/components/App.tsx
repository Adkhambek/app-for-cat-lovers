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
