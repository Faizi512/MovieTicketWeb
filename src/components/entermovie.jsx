import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import logo1 from "../spider.jpg";
import Image from "react-bootstrap/Image";

export default class Entermovie extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Card>
          <Image src={logo1} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
