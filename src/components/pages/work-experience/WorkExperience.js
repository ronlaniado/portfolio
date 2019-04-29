import React from 'react';
import Prompt from "../../prompt/Prompt";
import "./WorkExperience.css";

export default class WorkExperience extends React.Component {
    render() {
        return (
            <div>
                <Prompt text="cd work-experience" location="work-experience"/>
                <p>This is the work experience page</p>
                <Prompt location="work-experience" />
            </div>
        )
    }
}