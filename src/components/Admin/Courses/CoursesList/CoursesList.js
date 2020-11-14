import React from 'react'
import { getCourseDataUdemyApi } from "../../../../api/course";
export default function CoursesList(props) {
    const { courses, setReloadCourses } = props;
    console.log("Courses",courses.length);
    if (courses.length > 0) { 
          console.log(courses.length);
        courses.forEach(course => {
          
            getCourseDataUdemyApi(course.idCourse).then(response => { 
                console.log(response);
            })
        });
    }
    return (
        <div>
            <h1>CoursesList</h1>
        </div>
    )
}
