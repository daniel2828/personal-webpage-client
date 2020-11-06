import React, { useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import "./LayoutBasic.scss";
import MenuTop from "../components/Web/MenuTop";
import MenuSide from "../components/Web/MenuSide";
export default function LayoutAdmin(props) {
  const { Header, Footer } = Layout;
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const { routes } = props;

  const renderComponent = () => { 
    console.log(window.innerWidth);
    if (window.innerWidth > 768) {
      return (<MenuTop />)
    }
    else { 
      return (<MenuSide/>)
    }
  }


  return (
    <Row>
      <Col md={4} />
      <Col md={16} >
         
          {renderComponent()}
         <LoadRoutes routes={routes} />
         <Footer>Daniel Tendero García</Footer>
      </Col>
      <Col md={4} />


    </Row>
 
  );
}
function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
