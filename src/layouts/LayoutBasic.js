import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import "./LayoutBasic.scss";
export default function LayoutAdmin(props) {
  console.log(props);
  const { Header, Content, Footer } = Layout;
  const { routes } = props;
  return (
    <Layout>
      <h2>Menu side basic user</h2>
      <Layout>
        <Header>Header Basic</Header>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Daniel Tendero García</Footer>
      </Layout>
    </Layout>
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
