import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Prompt from "../prompt/Prompt";
import ListItem from "../list-item/ListItem";

//imports required for navigation
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import WorkExperience from "../pages/work-experience/WorkExperience";
import PersonalProjects from "../pages/personal-projects/PersonalProjects";
import Resume from "../pages/resume/Resume";

//import required for stylesheet
import "./Navigation.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
          <p>
            <Prompt text="ls"/>
          </p>
          <p>
            <Link to="/" className="link"><ListItem item="home" /></Link>
            <Link to="/about/" className="link"><ListItem item="about" /></Link>
            <Link to="/work-experience/" className="link"><ListItem item="work-experience" /></Link>
            <Link to="/personal-projects" className="link"><ListItem item="personal-projects" /></Link>
            <Link to="/resume/" className="link"><ListItem item="resume" /></Link>
          </p>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/work-experience/" component={WorkExperience} />
          <Route path="/personal-projects/" component={PersonalProjects} />
          <Route path="/resume/" component={Resume} />
      </HashRouter>
    );
  }
}
