import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, notification } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import "./AddEditPostForm.scss";
import moment from "moment";
import { getAccessTokenApi } from "../../../../api/auth";
export default function AddEditPostForm(props) {
    const { setIsVisibleModal, setReloadPosts, post } = props;
    const [postData, setPostData] = useState({});
    useEffect(() => {
        if (post) {
            setPostData(post);
        } else { 
            setPostData({});
        }
    }, [post])
    return (
        <div className="add-edit-post-form">
            <h1><AddEditForm postData={postData} setPostData={setPostData} post={ post}/></h1>
        </div>
    )
}

function AddEditForm(props) { 
    const { postData, setPostData, post} = props;
    return (
        <Form className="add-edit-post-form"
            layout="inline">
            <Row gutter={ 24}>
                <Col span={8}></Col>
                 <Col span={ 8}></Col>
                  <Col span={ 8}></Col>
            </Row>  
        </Form>
    )
}