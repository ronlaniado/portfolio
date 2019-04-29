import React from 'react';
import "./Prompt.css"

export default class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputState: true,
        };
    }
    componentDidMount() {
        if (this.props.text != null) {
            this.focus.focus();
        } else {
            this.setState({inputState: false});
        }
    }

    render() {
        return (
            <div>
                <p>ronlaniado<tt className="atSymbol">@</tt><tt className="portfolio">portfolio</tt><tt className="location">~/portfolio/{this.props.location}</tt> {<tt className="terminalStart">$</tt>}<tt className="input">{this.props.text}</tt><input disabled={this.state.inputState} className="form" ref={(input) => {this.focus = input}} /></p>
            </div>
        );
    }
}