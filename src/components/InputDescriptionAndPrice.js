import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomTextField from "./CustomTextField";

export default class InputDescriptionAndPrice extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <CustomTextField
                coustomId="itemDescription"
                label="Item Description"
                name="descriptionVal"
                placeholder="Enter a Description"
                val={this.props.descriptionVal}
                inputHandler={this.props.customHandler}
              />
            </Col>
            <Col>
              <CustomTextField
                coustomId="itemPrice"
                label="Item Price"
                name="priceVal"
                placeholder="Enter a Price..."
                val={this.props.priceVal}
                inputHandler={this.props.customHandler}
              />
            </Col>
            <Col>
              <Button
                variant="primary"
                size="lg"
                style={{ marginTop: "2em" }}
                onClick={this.props.buttonHandler}
              >
                Submit Item
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
