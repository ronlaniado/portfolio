import React from 'react';
import Prompt from "../../prompt/Prompt";
import "./PersonalProjects.css"

export default class PersonalProjects extends React.Component {
    render() {
        return (
            <div>
                <Prompt text="cd personal-projects" location="personal-projects"/>
                <p>This is the personal projects page</p>
                <Prompt location="personal-projects" />
            </div>
        )
    }
}