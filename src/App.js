import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Badge from "./components/Badge.jsx";
import Layout from "./pages/layout/Layout";
import Main from "./pages/main/Main"; 
import NewBadge from "./pages/NewBadge/NewBadge"
import NotFound from "./components/NotFound.jsx"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/badges" component={Badge}></Route>
          <Route exact path="/new" component={NewBadge}></Route>          
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
