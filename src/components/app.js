import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadAllInvoice from "./LoadAllInvoice";
import LoadCreateInvoice from "./LoadCreateInvoice";
import LoadDisplayInvoice from "./LoadDisplayInvoice";
import LoadHomepage from "./LoadHomepage";
import LoadUpdateInvoice from "./LoadUpdateInvoice";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <switch>
            <Route exact path="/">
              <LoadHomepage />
            </Route>
            <Route path="/createinvoice">
              <LoadCreateInvoice />
            </Route>
            <Route path="/updateinvoice">
              <LoadUpdateInvoice />
            </Route>
            <Route path="/displayinvoice">
              <LoadDisplayInvoice />
            </Route>
            <Route path="/allinvoice">
              <LoadAllInvoice />
            </Route>
          </switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
