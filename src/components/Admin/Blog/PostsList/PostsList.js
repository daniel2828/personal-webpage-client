import React from 'react';
import { List, Button, Modal, notification } from "antd";
import {EyeFilled, EditOutlined, DeleteOutlined } from  "@ant-design/icons";
import { Link } from "react-router-dom";
const { confirm } = Modal;

export default function PostsList(props) {
    const { posts } = props;
    console.log(posts);
    return (
        <div className="posts-list">
            <List 
                dataSource={posts.docs}
                renderItem={post => <Post post={ post}/>}
                />
        </div>
    )
}

function Post(props) { 
    const { post } = props;
    return (
        <List.Item actions={[
            <Link to={ `/blog/${post.url}`} target="_blank">
             <Button type="primary">
                <EyeFilled/>
            </Button></Link>
           ,
            <Button type="primary">
                <EditOutlined/>
            </Button>,
             <Button type="danger">
                <DeleteOutlined/>
            </Button>
        ]} >
            <List.Item.Meta title={ post.title}></List.Item.Meta>
        </List.Item>
    )
}
