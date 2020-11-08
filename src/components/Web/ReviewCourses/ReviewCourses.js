import React from 'react'
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/jpg/avatar.jpg"

import "./ReviewCourses.scss"
export default function ReviewCourses() {
    return (
        <div className="review-courses">
            <Row>
                <Col lg={4} />
                <Col lg={16} className="review-courses__title">
                    <h2>
                        Forma parte de una comunidad de estudiantes que no para de crecer !
                    </h2>
                </Col>
                <Col lg={4} />
            </Row>
            <Row>
                <Col lg={4} />
                <Col lg={16} className="review-courses__title">
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Me encanta este curso. El profesor es un gran profesional que se implica mucho con cada alumno."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Manuel García"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Me encanta este curso. El profesor es un gran profesional que se implica mucho con cada alumno."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Javier Nuñez"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Me encanta este curso. El profesor es un gran profesional que se implica mucho con cada alumno."
                            />
                        </Col>
                    </Row>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Me encanta este curso. El profesor es un gran profesional que se implica mucho con cada alumno."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Manuel García"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Me encanta este curso. El profesor es un gran profesional que se implica mucho con cada alumno."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Javier Nuñez"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Me encanta este curso. El profesor es un gran profesional que se implica mucho con cada alumno."
                            />
                        </Col>
                   </Row>
                </Col>
                <Col lg={4} />
            </Row>
        </div>
    )
}

function CardReview(props) { 
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;

    return (
        <Card className="review-courses__card">
            <p>
                { review}
            </p>
            <Meta
                avatar={<Avatar src={avatar} />}
                title={name}
                description={ subtitle}
            />
        </Card>
    )
}