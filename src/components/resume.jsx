import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import {
  purple,
  grey,
  lightBlue,
  blue,
  lightGreen
} from "@material-ui/core/colors";
import Education from "./education";
import WorkExperience from "./workExperience";
import ResearchExperience from "./researchExperience";
import Activity from "./activity";
import Info from "./info";
import Project from "./project";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
});

const titlesEnglish = {
  education: "EDUCATION",
  work: "WORK EXPERIENCE",
  research: "RESEARCH EXPERIENCE",
  project: "PROJECTS",
  activity: "ACTIVITIES & LEADERSHIP"
};

const titlesChinese = {
  education: "EDUCATION",
  work: "WORK EXPERIENCE",
  research: "RESEARCH EXPERIENCE",
  project: "PROJECTS",
  activity: "ACTIVITIES & LEADERSHIP"
};

class Resume extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    let titles;
    if (this.props.language === "Chinese") {
      titles = titlesChinese;
    } else {
      titles = titlesEnglish;
    }
    return (
      <React.Fragment>
        <a id="info" />
        <main className={classes.content} style={{ background: "#FFFFFF" }}>
          <div className={classes.toolbar} />
          <Info />
          <br />
          <h6>
            <b>{titles.education}</b>
          </h6>
          <Divider style={{ height: 2, background: grey[900] }} />
          <Education />
          <br />

          <h6>
            <b>{titles.work}</b>
          </h6>
          <Divider style={{ height: 2, background: grey[900] }} />
          <WorkExperience />
          <br />

          <h6>
            <b>RESEARCH EXPERIENCE</b>
          </h6>
          <Divider style={{ height: 2, background: grey[900] }} />
          <ResearchExperience />
          <br />

          <h6>
            <b>PROJECTS</b>
          </h6>
          <Divider style={{ height: 2, background: grey[900] }} />
          <Project />
          <br />

          <h6>
            <b>ACTIVITIES & LEADERSHIP</b>
          </h6>
          <Divider style={{ height: 2, background: grey[900] }} />
          <Activity />
          <br />
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Resume);
