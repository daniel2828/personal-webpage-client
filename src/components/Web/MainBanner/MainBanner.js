import React from 'react'
import { Row, Col } from "antd";
import "./MainBanner.scss";
export default function MainBanner() {
    return (
        <div className="main-banner">
            <div className="main-banner__dark"></div>
            <Row>
                <Col lg={4} />
                <Col lg={16} >
                    <h2>Blog personal de Daniel Tendero García.</h2>
                    <h3>
                        Te muestro todo lo que hago porque soy así de guay <br />
                        A que mola?
                    </h3>
                </Col>/
                <Col lg={4} />
            </Row>
        </div>
    )
}
