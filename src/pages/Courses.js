import React, { useState, useEffect}from 'react'
import { getCoursesApi } from "../api/course";
export default function Courses() {
    const [courses, setCourses] = useState([]);
    const [reloadCourses, setReloadCourses] = useState(false);
    useEffect(() => {
        console.log("holaawdawd")
        getCoursesApi().then(response => { 
            console.log(response)
        })
        setReloadCourses(false);
    }, [])
    return (
        <div className="courses">
            <h1>Courses</h1>
        </div>
    )
}
