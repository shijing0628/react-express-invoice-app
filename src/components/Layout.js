import React from 'react';
import CustomTextField from "./CustomTextField";
// import Form from 'react-bootstrap/Form';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      val: ''
    };
    this.textFieldHandler = this.textFieldHandler.bind(this);
  }

  textFieldHandler(e) {
    this.setState({
      val: e.target.value
    });
    console.log('text field' + this.state.val);
  }

  render() {
    return (
      <div>
        <CustomTextField
          customId='seller-name'
          label='Seller name'
          placeholder='Input the name...'
          val={this.state.val}
          inputHandler={this.textFieldHandler}
          text='Enter the full name'
        />
      </div>
    );
  }
}
