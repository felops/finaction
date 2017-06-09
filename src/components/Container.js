import React, { Component } from 'react';
import Menu from './Menu';
import Content from './Content';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

class Container extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={3}>
            <Menu />
          </Col>
          <Col xs={9}>
            <Content title={"Welcome!"} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Container;
