import React, { useState, useEffect } from 'react';
import { Button, notification } from "antd";
import Modal from "../../../components/Modal";
import "./Blog.scss";

export default function Blog() {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalTitle, setModalTitle] = useState(null);
    return (
        <div className="blog">
            <div className="blog__add-post">
                <Button type="primary">
                    Nuevo Post
                </Button>
            </div>
            <h1>
                Post List
            </h1>
            <h2>Paginación</h2>

            <Modal title={modalTitle }
                isVisible={ isVisibleModal}
                setIsVisible={ setIsVisibleModal}
                width="15%"
            />
       </div>
    )
}
