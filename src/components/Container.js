import React, { Component } from 'react';
import Menu from './Menu';
import Content from './Content';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

export default class Container extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={2}>
            <Menu />
          </Col>
          <Col xs={12} sm={10}>
            <Content title={"Welcome!"} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
