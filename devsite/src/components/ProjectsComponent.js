import React, { Component } from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardImg,
  Button
} from "reactstrap";
import gameImage from "../images/AlongCameASpiderScreen1.png";
import reactImage from "../images/versus-obstacle-scrn.png";
import foodImage from "../images/Heartfoods.png";
class Projects extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="row">
          <h3 className="text-light">Featured Projects</h3>
          <Card className="project-card">
            <CardImg
              className="card-image"
              top
              src={gameImage}
              alt="screenshot of game made with KaboomJS"
            />
            <CardBody>
              <CardTitle>Project 1</CardTitle>
              <CardSubtitle>brief description</CardSubtitle>
              <CardText>description of project with links</CardText>
              <Button>Click to see Github Deployment</Button>
            </CardBody>
          </Card>
          <div className="mt-3" />
          <Card className="project-card">
            <CardImg
              className="card-image"
              top
              src={reactImage}
              alt="screenshot of game made with KaboomJS"
            />
            <CardBody>
              <CardTitle>Project 1</CardTitle>
              <CardSubtitle>brief description</CardSubtitle>
              <CardText>description of project with links</CardText>
              <Button>Click to see Github Deployment</Button>
            </CardBody>
          </Card>
          <div className="mt-3" />
          <Card className="project-card">
            <CardImg
              className="card-image"
              top
              src={foodImage}
              alt="screenshot of game made with KaboomJS"
            />
            <CardBody>
              <CardTitle>Project 1</CardTitle>
              <CardSubtitle>brief description</CardSubtitle>
              <CardText>description of project with links</CardText>
              <Button>Click to see Github Deployment</Button>
            </CardBody>
          </Card>
          <div className="mt-5" />
        </div>
      </div>
    );
  }
}

export default Projects;
