import React, { useState } from "react";
import "./RegisterForm.scss";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  emailValidation,
  minLengthValidation,
} from "../../../utils/formValidations";

import { signUpApi } from "../../../api/user";
export default function RegisterForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });
  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({ ...inputs, [e.target.name]: e.target.checked });
    } else {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
    console.log(e.target.value);
  };

  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({
        ...formValid,
        [name]: emailValidation(e.target),
      });
    } else if (type == "password") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(e.target, 6),
      });
    } else if (type === "checkbox") {
      setFormValid({
        ...formValid,
        [name]: e.target.checked,
      });
    }
  };
  const register = async (e) => {
    const passwordValue = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;
    const nameVal = inputs.email;
    const privacyPolicyVal = inputs.privacyPolicy;
    if (!nameVal || !passwordValue || !repeatPasswordVal || !privacyPolicyVal) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      if (passwordValue != repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales",
        });
      } else {
        const result = await signUpApi(inputs);
        if (!result.ok) {
          notification["error"]({
            message: result.message,
          });
        } else {
          notification["success"]({
            message: result.message,
          });
          resetForm();
        }
      }
    }
  };

  const resetForm = () => {
    const vinputs = document.getElementsByTagName("input");
    for (let i = 0; i < vinputs.length; i++) {
      vinputs[i].classList.remove("success");
      vinputs[i].classList.remove("error");
    }
    setInputs({
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });
    setFormValid({
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };
  return (
    <Form className="register-form" onChange={changeForm} onSubmit={register}>
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          checked={inputs.privacyPolicy}
          onChange={inputValidation}
        >
          He leido y acepto la politica de privacidad
        </Checkbox>
      </Form.Item>

      <Button
        htmlType="submit"
        className="register-form__button"
        onClick={register}
      >
        Registrarse
      </Button>
    </Form>
  );
}
