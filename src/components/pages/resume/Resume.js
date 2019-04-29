import React from 'react';
import Prompt from "../../prompt/Prompt";
import "./Resume.css"

export default class Resume extends React.Component {
    render() {
        return (
            <div>
                <Prompt text="cd resume" location="resume"/>
                <p>This is the resume page</p>
                <Prompt location="resume" />
            </div>
        )
    }
}