import React from 'react'
import { Row, Col } from "antd";
import "./NavigationFooter.scss";
import { Link } from "react-router-dom";
import { BookOutlined, CodeFilled } from "@ant-design/icons";
import { getNavigationApi} from "../../../../api/navigation"
export default function NavigationFooter() {
    return (
        <Row className="navigation-footer">
            <Col md={ 24}>
                <h3>
                  Navegación
                </h3>
            </Col>
            <Col md={12}>
                <RenderListLeft/>
            </Col>
            <Col md={12}>
                <RenderListRight/>
            </Col>
        </Row>
    )
}

function RenderListLeft() { 
    return (
        <ul>
            <li>
                <a href="#">
                    <BookOutlined title="HOla"/> Cursos online
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <CodeFilled /> Desarrollo web
                </Link> 
            </li>
        </ul>
    )
}
function RenderListRight() { 
    return (
        <ul>
            <li>
                <a href="#">
                    <BookOutlined /> Cursos online
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <CodeFilled /> Desarrollo web
                </Link> 
            </li>
        </ul>
    )
}