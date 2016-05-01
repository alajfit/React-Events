import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <header>
                <Title head={this.props.title} deeper={this.props.sub} />
                <small>{this.props.sub}</small>
                <br /><br />
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </header>
        );
    }
}
