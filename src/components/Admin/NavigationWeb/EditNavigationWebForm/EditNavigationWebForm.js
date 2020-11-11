import React, { useState, useEffect} from 'react'
import { Form, Input, Button, notification } from "antd"

import { updateNavigationApi } from "../../../../api/navigation"

import { getAccessTokenApi} from "../../../../api/auth"

import { FontSizeOutlined, LinkOutlined } from "@ant-design/icons";
import "./EditNavigationWebForm.scss"

export default function EditNavigationWebForm(props) {
    const { setIsVisibleModal, setReloadNavigation, navigation } = props;

    const [navigationWebdata, setNavigationWebData] = useState(navigation);
    useEffect(() => { 
        setNavigationWebData(navigation);
    }, [navigation])
    const editMenu = event => { 
        if (!navigationWebdata.title || !navigationWebdata.url) {
            notification["error"]({
                message: "Todos los campos son obligatorios"
            })
        } else { 
            const accessToken = getAccessTokenApi();
            updateNavigationApi(accessToken, navigationWebdata._id, navigationWebdata)
            .then(
                response => { 
                    console.log(response);
                    notification["success"]({
                        message:response
                    })
                    setReloadNavigation(true);
                    setIsVisibleModal(false);
                }
            ).catch(() => {
                notification["error"]({
                    message:"Error del servidor, intentelo más tarde"
                })
            })
        }
    }

    return (
        <div className="edit-menu-web-form">
            <EditForm
                navigationWebdata={navigationWebdata}
                setNavigationWebData={setNavigationWebData}
                editMenu={editMenu}
            />
        </div>
    )
}

function EditForm(props) { 
    const { navigationWebdata, setNavigationWebData, editMenu } = props;

    return (
        <Form className="form-edit" onFinish={editMenu}>
            <Form.Item>
               <Input
                    prefix={<FontSizeOutlined />}
                    placeholder="Título"
                    value={navigationWebdata.title}
                    onChange={e => setNavigationWebData({...navigationWebdata, title:e.target.value})}
                />
            </Form.Item>  
            <Form.Item>
               <Input
                    prefix={<LinkOutlined />}
                    placeholder="URL"
                    value={navigationWebdata.url}
                    onChange={e => setNavigationWebData({...navigationWebdata, url:e.target.value})}
                />
            </Form.Item>  
             <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Actualizar menú
                </Button>
            </Form.Item>  
        </Form>
    )
}