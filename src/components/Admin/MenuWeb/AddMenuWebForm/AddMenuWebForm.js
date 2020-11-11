import React, { useState } from "react";
import { Form, Input, Button, Select, notification , Row,Col} from "antd";

import { getAccessTokenApi } from "../../../../api/auth";
import {addMenuApi } from "../../../../api/menu";
import { FontSizeOutlined } from "@ant-design/icons";
import "./AddMenuWebForm.scss";

export default function AddMenuWebForm(props) {
  const { setIsVisibleModal, setReloadMenuWeb } = props;
  const [menuWebData, setMenuWebData] = useState({});

  const addMenu = event => {

    let finalData = {
      title: menuWebData.title,
      url : (menuWebData.http ? menuWebData.http : "http://") + menuWebData.url
    }
    console.log(finalData);
    if (!finalData.title || !finalData.url || !menuWebData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios."
      })
    } else { 
      const accessToken = getAccessTokenApi();
      finalData.active = false;
      finalData.order = 1000;
      addMenuApi(accessToken, finalData).then(response => { 
        notification["success"]({
          message: response
        })
        setIsVisibleModal(false);
        setReloadMenuWeb(true);
        setMenuWebData({});
        finalData = {};
      }).catch(() => { 
        notification["error"]({
          message: "Error en el servidor."
        })
      })
    }


  };

  return (
    <div className="add-menu-web-form">
      <AddForm
        menuWebData={menuWebData}
        setMenuWebData={setMenuWebData}
        addMenu={addMenu}
      />
    </div>
  );
}

function AddForm(props) {
  const { menuWebData, setMenuWebData, addMenu } = props;
  const { Option } = Select;



  return (
    <Form className="form-add" onFinish={addMenu}>
      <Form.Item>
        <Input
          prefix={<FontSizeOutlined/>}
          placeholder="Titulo"
          value={menuWebData.title}
          onChange={e =>
            setMenuWebData({ ...menuWebData, title: e.target.value })
          }
        />
      </Form.Item>
       <Row gutter={24}>
        <Col span={4}>
              <Select
                defaultValue="http://"
                size="mi"
                //Express operator
                onChange={e => setMenuWebData({ ...menuWebData, http: e })}
              >
                <Option  value="http://">http://</Option>
               <Option  value="https://">https://</Option>
        </Select>
        </Col>
        <Col span={20}>
         <Form.Item>
            <Input
            
              placeholder="URL"
              value={menuWebData.url}
              onChange={e =>
                setMenuWebData({ ...menuWebData, url: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>


     
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear menú
        </Button>
      </Form.Item>
    </Form>
  );
}