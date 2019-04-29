/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Prompt from "../../prompt/Prompt";

import "./About.css"

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Prompt text="cd about" location="about"/>
                <div className="body">
                /******************/
                /*                */
                /*  Hello World!  */
                /*                */
                /******************/
                </div>
                <Prompt location="about"/>
            </div>
        )
    }
}