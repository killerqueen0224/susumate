import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap';
<<<<<<< HEAD
import styles from '../public/css/main.css';

=======

// require('../public/css/main.css');

>>>>>>> 0b0f5bd8e2b0ffaf84f07c18a917c0c92af9ccba
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
