import React, { useState, useEffect } from 'react'
import { Row, Col, Spin, notification } from "antd";

import { getCoursesApi } from "../api/course";
import PresentationCourses from "../components/Web/Courses/PresentationCourses";
import CourseList from "../components/Web/Courses/CoursesList";
export default function Courses() {
   
    return (<Row>
        <Col md={4}>
            
        </Col>
        <Col md={16}>
            <PresentationCourses></PresentationCourses>
            <CourseList></CourseList>
        </Col>
        <Col md={ 4}></Col>
    </Row>
    )
}
