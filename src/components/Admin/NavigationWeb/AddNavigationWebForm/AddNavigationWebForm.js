import React, { useState } from "react";
import { Form, Input, Button, Select, notification , Row,Col} from "antd";

import { getAccessTokenApi } from "../../../../api/auth";
import {addNavigationApi } from "../../../../api/navigation";
import { FontSizeOutlined } from "@ant-design/icons";
import "./AddNavigationWebForm.scss";

export default function AddNavigationWebForm(props) {
   const { setIsVisibleModal, setReloadNavigation } = props;
  const [navigationWebData, setNavigationWebData] = useState({});

  const addMenu = event => {

    let finalData = {
      title: navigationWebData.title,
      url : (navigationWebData.http ? navigationWebData.http : "http://") + navigationWebData.url
    }
    console.log(finalData);
    if (!finalData.title || !finalData.url || !navigationWebData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios."
      })
    } else { 
      const accessToken = getAccessTokenApi();
      finalData.active = false;
      finalData.order = 1000;
      addNavigationApi(accessToken, finalData).then(response => { 
        notification["success"]({
          message: response
        })
          console.log(response);
          setIsVisibleModal(false);
            console.log(response);
        setReloadNavigation(true);
        setNavigationWebData({});
        finalData = {};
      }).catch(() => { 
        notification["error"]({
          message: "Error en el servidor."
        })
      })
    }


  };

  return (
    <div className="add-navigation-web-form">
      <AddForm
        navigationWebData={navigationWebData}
        setNavigationWebData={setNavigationWebData}
        addMenu={addMenu}
      />
    </div>
  );
}

function AddForm(props) {
  const { navigationWebData, setNavigationWebData, addMenu } = props;
  const { Option } = Select;



  return (
    <Form className="form-add" onFinish={addMenu}>
      <Form.Item>
        <Input
          prefix={<FontSizeOutlined/>}
          placeholder="Titulo"
          value={navigationWebData.title}
          onChange={e =>
            setNavigationWebData({ ...navigationWebData, title: e.target.value })
          }
        />
      </Form.Item>
       <Row gutter={24}>
        <Col span={4}>
              <Select
                defaultValue="http://"
                size="mi"
                //Express operator
                onChange={e => setNavigationWebData({ ...navigationWebData, http: e })}
              >
                <Option  value="http://">http://</Option>
               <Option  value="https://">https://</Option>
        </Select>
        </Col>
        <Col span={20}>
         <Form.Item>
            <Input
            
              placeholder="URL"
              value={navigationWebData.url}
              onChange={e =>
                setNavigationWebData({ ...navigationWebData, url: e.target.value })
              }
            />
          </Form.Item>
        </Col>
          </Row>
       <Row gutter={24}>
            <Col span={6}>
                <Select
                    defaultValue="left"
                
                    //Express operator
                    onChange={e => setNavigationWebData({ ...navigationWebData, left: (e =="left"? true:false) })}
                >
                    <Option  value="left">left</Option>
                <Option  value="right">right</Option>
            </Select>
            </Col>
        <Col span={18}>
         
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