import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import routes from "./config/routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubroutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}
// Para enrutar las rutas
// Lo que no entiendo muy bien es la mierda del render
// Renderiza lo que haya en el routes.js
function RouteWithSubroutes(route) {
  console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}
export default App;
