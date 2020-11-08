import React from 'react'
import "./HowMyCoursesWork.scss"
import { Row, Col, Card } from "antd"

import { ClockCircleFilled, KeyOutlined , MessageFilled, UserOutlined, DollarCircleFilled, CheckCircleFilled} from "@ant-design/icons";
export default function HowMyCoursesWork() {
    return (
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work__title">
                <h2>¿Cómo funcionan mis cursos?</h2>
                <h3>Cada curso cuenta con contenido bajo la web de Udemy, activa las 24 horas del día los 365 días del año</h3>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            icon={<ClockCircleFilled />}
                            title="Cursos y Clases"
                            description="Cursos prácticos y adaptables a tu ritmo, en clases de máximo 15 minutos"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<KeyOutlined />}
                            title="Acceso 24/7"
                            description="Accede a todos los cursos en cualquier momento y lugar"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<MessageFilled />}
                            title="Aprendizaje colaborativo"
                            description="Aprende de los demás dejando tus dudas para profesores y compañeros"
                        />
                    </Col>
                </Row>
                 <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            icon={<UserOutlined />}
                            title="Mejora tu perfil"
                            description="Aprende y mejora tu perfil, mantente actualizado"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<DollarCircleFilled />}
                            title="Precios bajos"
                            description="Los mejores precios del mercado y los cursos son por tiempo limitado"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<CheckCircleFilled />}
                            title="Certificado de finalización"
                            description="Al acabar el curso recibirás una certificación de finalización en PDF emitido por Udemy"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={ 4}/>
       </Row>
    )
}

function CardInfo(props) { 
    const { icon, title, description } = props;
    const { Meta } = Card;

    return (
        <Card className="how-my-courses-work__card">
            <i>{icon}</i>
            <Meta title={ title} description ={description}/>
        </Card>
    )
}