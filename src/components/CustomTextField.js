import React from "react";
import Form from "react-bootstrap/Form";

export default function CustomTextField(props) {
  return (
          <>
            <Form.Group controlId={this.props.customId}>
              <Form.Label>
                <h5>{this.props.label}</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={this.props.placeholder}
                value={this.props.val}
                onChange={this.props.inputHandler}
              />
              <Form.text>{this.props.text}</Form.text>
            </Form.Group>
          </>
  )
}

// export default class CustomTextField extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <>
//         <Form.Group controlId={this.props.customId}>
//           <Form.Label>
//             <h5>{this.props.label}</h5>
//           </Form.Label>
//           <Form.Control
//             type="text"
//             placeholder={this.props.placeholder}
//             value={this.props.val}
//             onChange={this.props.inputHandler}
//           />
//           <Form.text>{this.props.text}</Form.text>
//         </Form.Group>
//       </>
//     );
//   }
// }
