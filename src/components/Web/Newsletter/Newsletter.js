import React, { useState} from 'react';
import "./Newsletter.scss";
import { Form, Icon, Input, Button, notification } from "antd";
import { suscribeNewsletterApi} from "../../../api/newsletter";
import { UserOutlined} from "@ant-design/icons"
export default function Newsletter() {
    const [email, setEmail] = useState("")
    const onFinish = () => { 
        const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
        const resultValidation = emailValid.test(email);
        if (!resultValidation) {
            notification["error"]({
                message: "El email no es válido"
            })
        } else { 
            suscribeNewsletterApi(email)
                .then(response => { 
                    console.log(response);
                    if (response.code !== 200) {
                        notification["warning"]({
                            message: response.message
                        })
                    } else {
                        notification["success"]({
                            message: response.message
                        })
                        setEmail("");
                    }
                    
                })
        }
    }
    return (
        <div className="newsletter">
            <h3>Newsletter...</h3>
            <Form onFinish={ onFinish}>
                <Form.Item>
                    <Input
                        prefix={<UserOutlined style={{ color: "rgba(0,0,0,0.25)" }}></UserOutlined>}
                        placeholder="Correo electronico"
                        value={ email}
                         onChange={(e) => setEmail(e.target.value) }
                    />
                </Form.Item>
                 <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        ¡Me suscribo!
                   </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
