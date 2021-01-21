import React, { useState, useEffect} from 'react'
import { Form, Icon, Input, Button, notification } from "antd";
import { getAccessTokenApi } from "../../../../api/auth";
import "./AddEditCoursesForm.scss";
import { KeyOutlined, GifOutlined, DollarOutlined, LinkOutlined} from "@ant-design/icons";
import { addCourseApi } from "../../../../api/course";

export default function AddEditCoursesForm(props) {
    const { setIsVisibleModal, setReloadCourses, course } = props;
    const [courseData, setCourseData] = useState({});
    const addCourse = e => { 
        if (!courseData.idCourse) {
            notification["error"]({
                message: "El id del curso es obligatiorio"
            });
        }
        else { 
            const accessToken = getAccessTokenApi();
            addCourseApi(accessToken, courseData)
                .then(response => { 
                    const typeNotification = response.code === 200 ? "success" : "warning";
                    notification[typeNotification]({
                        message: response.message
                    });
 
                    setIsVisibleModal(false);
                    setReloadCourses(true);
                    setCourseData({});

                }).catch(() => { 
                    notification["error"]({
                        message: "Error del servidor, intentelo más tarde."
                    })
                });
                
        }
        
    }
    const editCourse = e => { 
        console.log("Actualizando curso");
    }
    return (
        <div className="add-edit-course-form">
            <AddEditForm
                course={course}
                addCourse={addCourse}
                editCourse={editCourse}
                courseData={ courseData}
                setCourseData={setCourseData}
            
            ></AddEditForm>
        </div>
    )
}

function AddEditForm(props) { 
    const { course, addCourse, editCourse, courseData,setCourseData} = props;
    return (
        <Form className="form-add-edit" onFinish={ course ? editCourse : addCourse}>
            <Form.Item>
                <Input
                    prefix={<KeyOutlined />}
                    placeholder="ID del curso"
                    value={ courseData.idCourse}
                    onChange={e => setCourseData({...courseData, idCourse: e.target.value}) }
                    disabled={ course? true:false}
                ></Input>
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LinkOutlined />}
                    placeholder="URL del curso"
                    value={courseData.link }
                    onChange={e => setCourseData({...courseData, link: e.target.value}) }
                   
                ></Input>
            </Form.Item>
              <Form.Item>
                <Input
                    prefix={<GifOutlined />}
                    placeholder="Cupón de descuento"
                    value={courseData.coupon}
                    onChange={e => setCourseData({ ...courseData, coupon : e.target.value })}
                ></Input>
            </Form.Item>
             <Form.Item>
                <Input
                    prefix={<DollarOutlined />}
                    placeholder="Precio del curso"
                    value={courseData.price}
                    onChange={e => setCourseData({ ...courseData, price: e.target.value })}
                   
                ></Input>
            </Form.Item>
         
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    { course ? "Actualizar curso" : "Crear curso"}
               </Button>
            </Form.Item>
        </Form>
    )
}