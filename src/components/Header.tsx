import React, { PureComponent } from "react";

export class Header extends PureComponent {
    render() {
        return (
            <header className="border-bottom">
                <h1 className="text-center">Cats List</h1>
            </header>
        );
    }
}

export default Header;
