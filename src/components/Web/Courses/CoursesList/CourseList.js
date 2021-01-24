import React from 'react'
import "./CourseList.scss";
export default function CourseList(props) {
    const { courses } = props;
    console.log(courses);
    return (
        <div>
            <h2>Course List</h2>
        </div>
    )
}
