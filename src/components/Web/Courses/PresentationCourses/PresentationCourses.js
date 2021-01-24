import React from 'react'
import "./PresentationCourses.scss"
import AcademyLogo from "../../../../assets/img/png/academy-logo.png";
export default function PresentationCourses() {
    return (
        <div className="presentation-courses">
            <img src={AcademyLogo} alt="Cursos de Agustín Navarro Galdón"></img>
            <p>
                Soy Daniel Tendero, El mejor desarrollador del mundo. Unete a mi secta.
                 
            </p>
            <p>Uneté ya !</p>
        </div>
    )
}
