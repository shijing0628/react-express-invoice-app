import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class ProductsAndPricesListing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.itemsListing;
    const htmlMarkup = [];

    items.map((product, index) => {
      htmlMarkup.push(
        <Row key={"index-" + index}>
          <Col>{product.description}</Col>
          <Col>${product.price}</Col>
        </Row>
      );
    });

    return (
      <>
        <Container>{htmlMarkup}</Container>
      </>
    );
  }
}
