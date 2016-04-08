import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap';

// require('../public/css/main.css');

export default class Body extends React.Component {

  render() {
    var style = {
      body: {
        fontFamily:"01フロップデザイン",
        background: "red",
        paddingTop: "70px"
      },
      blue: {
        background: "blue"
      }
    }
    return (
      <Grid style={style.body}>
        <Row>
          <Col xs={12} md={4} style={style.blue}>
            あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
          </Col>
          <Col xs={12} md={4}>
            あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
          </Col>
          <Col xs={12} md={4}>
            あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
          </Col>
          <Col xs={12} md={4} style={style.blue}>
            あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
          </Col>
          <Col xs={12} md={4}>
            あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
          </Col>
          <Col xs={12} md={4}>
            あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
          </Col>
        </Row>
      </Grid>
    );
  }
}
