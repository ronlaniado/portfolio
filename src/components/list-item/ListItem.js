import React from "react";
import "./ListItem.css";

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <tt className="item">
                {this.props.item}
            </tt>
        )
    }
}