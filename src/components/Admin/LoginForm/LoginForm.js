import React, { useState } from "react";
import "./LoginForm.scss";
import { Form, Icon, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
export default function LoginForm() {
  // Create states
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  // Change form event
  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // Login a user
  const login = async (e) => {
    const result = await signInApi(inputs);

    if (result.message) {
      notification["error"]({
        message: result.message,
      });
    } else {
      // If login is correct get accessToken and refresh token and store them in local storage
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      notification["success"]({
        message: "Login correcto.",
      });
      window.location.href = "/admin";
    }
  };
  return (
    <Form className="login-form" onChange={changeForm} onFinish={login}>
      <Form.Item>
        <Input
          prefix={
            <UserOutlined type="user" style={{ color: "rgba(0,0,0,.25)" }} />
          }
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="login-form__input"
        ></Input>
      </Form.Item>
      <Form.Item>
        <Input
          prefix={
            <LockOutlined type="user" style={{ color: "rgba(0,0,0,.25)" }} />
          }
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
        ></Input>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form__button">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}
