import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./providers/AuthProviders";
import "./App.scss";

import routes from "./config/routes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubroutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}
// Para enrutar las rutas
// Lo que no entiendo muy bien es la mierda del render
// Renderiza lo que haya en el routes.js
function RouteWithSubroutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}
export default App;
