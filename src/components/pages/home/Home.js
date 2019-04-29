import React from 'react';
import Prompt from "../../prompt/Prompt";
import "./Home.css"

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Prompt text="cd home" location="home"/>
                <Prompt location="home"/>
            </div>
        )
    }
}