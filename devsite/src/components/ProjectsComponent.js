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
              <CardTitle className="card-title">Along Came A Spider</CardTitle>
              <CardSubtitle className="card-subtitle">
                Video Game Built With KaboomJS
              </CardSubtitle>
              <CardText className="card-text">
                This project was created and deployed in under 7 days during the
                Mintbean Hiring Hackathon: 2-D Game Edition
              </CardText>
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
              <CardTitle className="card-title">Versus Obstacle</CardTitle>
              <CardSubtitle className="card-subtitle">
                Website Built With React
              </CardSubtitle>
              <CardText className="card-text">
                Built while learning the React fundamentals
              </CardText>
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
              <CardTitle className="card-title">First Foods</CardTitle>
              <CardSubtitle className="card-subtitle">
                App Built With React Native
              </CardSubtitle>
              <CardText className="card-text">
                Built to assist new parents in tracking each new food they are
                introducing to their child/children
              </CardText>
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
