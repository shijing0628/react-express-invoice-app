import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class FinalPrice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.itemsListing;
    let finalPrice = 0;
    if (items.length > 0) {
      finalPrice = items.reduce((acc, item) => {
        acc += item.price;
        return acc;
      }, 0);
    }

    return (
      <>
        <Container>
          <Row>
            <Col>
              <h4>${finalPrice}</h4>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
