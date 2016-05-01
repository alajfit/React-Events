import React from "react";

import Header from "./Header";
import ListItem from "./ListItem";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { name: "Helen"};
    }

    changeTitle(title) {
        this.setState({ name: title });
    }

    render() {
        const subTitle = "Testing some input";
        return ( // We can then add an array as an expression
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.name} sub={subTitle} />
                <br />
                <Footer />
            </div>
        );
    }
}
