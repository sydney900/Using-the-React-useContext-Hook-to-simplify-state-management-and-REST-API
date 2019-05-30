import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "./App.css";

import Notfound from "./components/common/Notfound";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ErrorFromContext from "./components/common/ErrorFromContext";
//import ClientList from "./components/client/ClientList";
import ClientList from "./components/client/ClientList";
import ClientContextContainer from "./containers/ClientContextContainer";
//import ClientListContainer from "./containers/ClientListContainer";
//import ClientCreateContainer from "./containers/ClientCreateContainer";
import ClientCreate from "./components/client/ClientCreate";
import ClientDetail from "./components/client/ClientDetail";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <ClientContextContainer>
          <div className="app">
            <Header logoName="React Hooks Demo" />
            <ErrorFromContext />
            <Switch>
              {/* <Route exact path="/" component={ClientListContainer} /> */}
              <Route exact path="/" component={ClientList} />
              {/* <Route path="/client/new" component={ClientCreateContainer} /> */}
              <Route path="/client/new" component={ClientCreate} />
              <Route path="/client/:id" component={ClientDetail} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </ClientContextContainer>
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default App;
