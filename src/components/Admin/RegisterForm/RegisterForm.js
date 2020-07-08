import React from "react";
import "./RegisterForm.scss";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
export default function RegisterForm() {
  return (
    <Form className="register-form">
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy">
          He leido y acepto la politica de privacidad
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Registrarse
        </Button>
      </Form.Item>
    </Form>
  );
}
