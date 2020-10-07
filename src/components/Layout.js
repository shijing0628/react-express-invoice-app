import React from "react";
import CustomTextField from "./CustomTextField";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerName: "",
      sellerAddress: "",
      customerName: "",
      customerAddress: "",
    };
    this.textFieldHandler = this.textFieldHandler.bind(this);
  }

  textFieldHandler(e) {
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

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
