import React from "react";
import { Button, Form } from "react-bootstrap";
import CustomTextArea from "./CustomTextArea";
import CustomTextField from "./CustomTextField";
import FinalPrice from "./FinalPrice";
import DescriptionAndPrice from "./InputDescriptionAndPrice";
import ProductsAndPricesListing from "./ProductsAndPricesListing";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sellerName: "",
      sellerAddress: "",
      customerName: "",
      customerAddress: "",
      invoiceDescription: "",
      termsAndConditions: "",
      descriptionVal: "",
      priceVal: "",
      itemsListing: [
        // { description: "green shirt", price: 200 },
        // { description: "red shirt", price: 200 },
        // { description: "black shirt", price: 200 },
        // { description: "blue shirt", price: 200 },
      ],
    };

    this.textFieldHandler = this.textFieldHandler.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  textFieldHandler(e) {
    if (e.target.name == "invoiceDescription") {
      this.setState({
        invoiceDescription: e.target.value,
      });
    }
    if (e.target.name == "termsAndConditions") {
      this.setState({
        termsAndConditions: e.target.value,
      });
    }
    if (e.target.name == "descriptionVal") {
      this.setState({
        descriptionVal: e.target.value,
      });
    }
    if (e.target.name == "priceVal") {
      this.setState({
        priceVal: e.target.value,
      });
    }

    if (e.target.name == "sellerName") {
      this.setState({
        sellerName: e.target.value,
      });
    }
    if (e.target.name == "sellerAddress") {
      this.setState({
        sellerAddress: e.target.value,
      });
    }
    if (e.target.name == "customerName") {
      this.setState({
        customerName: e.target.value,
      });
    }
    if (e.target.name == "customerAddress") {
      this.setState({
        customerAddress: e.target.value,
      });
    }
  }

  buttonClick() {
    this.setState((state, props) => {
      const currentArr = this.state.itemsListing;
      return {
        itemsListing: currentArr.concat([
          {
            description: state.descriptionVal,
            price: Number(state.priceVal),
          },
        ]),
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //Final price
    const items = this.state.itemsListing;
    let finalPrice = 0;
    finalPrice = items.reduce((acc, item) => {
      acc += item.price;
      return acc;
    }, 0);

    //sale invoice info object created
    const salesInvoice = {
      sellerName: this.state.sellerName,
      sellerAddress: this.state.sellerAddress,
      customerName: this.state.customerName,
      customerAddress: this.state.customerAddress,
      items: this.state.itemsListing,
      finalPrice: finalPrice,
      terms: this.state.termsAndConditions,
      invoiceDescription: this.state.descriptionVal,
    };
    //make a request to rest API
    fetch("/api/createinvoice", {
      method: "POST",
      body: JSON.stringify(salesInvoice),
      header: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("hi");
      if (res.ok) {
        console.log("ok");
      } else {
        console.log("wrong");
      }
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <CustomTextArea
          label="Invoice Description"
          name="invoiceDescription"
          val={this.state.invoiceDescription}
          inputHandler={this.textFieldHandler}
        />
        <CustomTextField
          customId="seller-name"
          label="Seller name"
          placeholder="Input the name..."
          val={this.state.sellerName}
          inputHandler={this.textFieldHandler}
          text="Enter the full seller name"
          name="sellerName"
        />
        <CustomTextField
          customId="seller-address"
          label="Seller address"
          placeholder="Input the address..."
          val={this.state.sellerAddress}
          inputHandler={this.textFieldHandler}
          text="Enter the full seller address"
          name="sellerAddress"
        />
        <CustomTextField
          customId="customer-name"
          label="Customer name"
          placeholder="Input the customer name..."
          val={this.state.customerName}
          inputHandler={this.textFieldHandler}
          text="Enter the full customer name"
          name="customerName"
        />
        <CustomTextField
          customId="customer-address"
          label="Customer address"
          placeholder="Input the Customer address..."
          val={this.state.customerAddress}
          inputHandler={this.textFieldHandler}
          text="Enter the full Customer address"
          name="customerAddress"
        />

        <ProductsAndPricesListing itemsListing={this.state.itemsListing} />

        <DescriptionAndPrice
          descriptionVal={this.state.descriptionVal}
          priceVal={this.state.priceVal}
          buttonHandler={this.buttonClick}
          customHandler={this.textFieldHandler}
        />

        <FinalPrice itemsListing={this.state.itemsListing} />

        <CustomTextArea
          label="Terms and Conditions"
          name="termsAndConditions"
          val={this.state.termsAndConditions}
          inputHandler={this.textFieldHandler}
        />

        <Button type="submit" variant="primary" size="lg">
          Create a Sales Invoice
        </Button>
      </Form>
    );
  }
}
