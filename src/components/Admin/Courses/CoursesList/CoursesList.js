import React, { useState, useEffect} from 'react'
import { getCourseDataUdemyApi, deleteCourseApi } from "../../../../api/course";
import { List, Button, Modal as ModalAntd, notification } from "antd";
import DragSortableList from "react-drag-sortable";
import AddEditCourseForm from "../AddEditCoursesForm";
import Modal from "../../../Modal";
import { EditOutlined, DeleteOutlined}from "@ant-design/icons";
import "./CoursesList.scss";
import { getAccessTokenApi } from "../../../../api/auth";
const { confirm } = ModalAntd; 

export default function CoursesList(props) {
    const { courses, setReloadCourses } = props;
    const [listCourses, setListCourses] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);
   
    useEffect(() => {
        const listCourseArray = [];
       
        courses.forEach(course => { 
            
            listCourseArray.push({
                content: (<Course course={course} deleteCourse={ deleteCourse}></Course>)
            });
        })
        setListCourses(listCourseArray);
    }, [courses])

    const onSort = (sortedList, dropEvent) => { 
        console.log(sortedList);
    } 
    
    const addCourseModal = () => { 
        console.log("Hola")
        setIsVisibleModal(true);
        setModalTitle("Creando nuevo curso");
        setModalContent(<AddEditCourseForm
            setIsVisibleModal={setIsVisibleModal}
            setReloadCourses={setReloadCourses}
        />)
    }

    const deleteCourse = course => {
        const accessToken = getAccessTokenApi();
        confirm({
            title: "Eliminando curso",
            content: "Estas seguro de que quieres eliminar el curso" + course.idCourse,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar" ,
            onOk() {
                deleteCourseApi(accessToken, course._id).
                then(response => { 
                    const typeNotification = response.code === 200 ? "success" : "warning";
                    notification[typeNotification]({
                        message: response.message
                    })
                    setReloadCourses(true);
                }).catch((err) => { 
                    console.log(err);
                    notification["error"]({
                        message: "Error del servidor, intentelo más tarde"
                    })
                })
            }
            
        })
    }
  
    return (
        <div className="courses-list">
            <div className="courses-list__header">
                <Button type="primary" onClick={  addCourseModal}>Nuevo Curso</Button>
            </div>
            <div className="courses-list__items">
                {listCourses.length === 0 && (
                    <h2 style={{textAlign: "center", margin:0}}>No tienes cursos creados</h2>
                )}
                <DragSortableList items={listCourses} onSort={ onSort} type="vertical"></DragSortableList>
            </div>
            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={ setIsVisibleModal}
            >
                { modalContent}
            </Modal>
        </div>
        
    )
}


function Course(props) { 
    const { course ,deleteCourse} = props;
    const [courseData, setCourseData] = useState(null);
    useEffect(() => {
        console.log(course.idCourse)
        getCourseDataUdemyApi(course.idCourse).then(response => {
         
            if (response.code !== 200) {
                notification["warning"]({ message: `El curso con el id ${course.idCourse} no se ha encontrado ` });
            }
            setCourseData(response.data);
        })
    }, [course]);
    if (!courseData) { 
        return null;
    }

    return (
        <List.Item
            actions={[
                <Button type="primary" onClick={() => console.log("Editar curso")}>
                   <EditOutlined></EditOutlined>
                </Button>,
                <Button type="danger" onClick={() => deleteCourse(course)}>
                   <DeleteOutlined></DeleteOutlined>
                </Button>
            ]}    
    
        >
            <img src={courseData.image_480x270} alt={courseData.title} style={{ width: "100px" ,marginRight :"20px" }}
            />
            <List.Item.Meta title={`${courseData.title} | ID: ${course.idCourse}`}
                description={ courseData.headline}></List.Item.Meta>
        </List.Item>
    )
}