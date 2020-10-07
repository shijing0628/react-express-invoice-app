import React from "react";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Layout from "./Layout";

function LoadCreateInvoice() {
  return (
    <div>
      <Jumbotron>
        <Card>
          <Card.Header as="h4">Create Invoice Form</Card.Header>
          <Card.Body>
            <Layout />
          </Card.Body>
        </Card>
      </Jumbotron>
    </div>
  );
}

export default LoadCreateInvoice;
