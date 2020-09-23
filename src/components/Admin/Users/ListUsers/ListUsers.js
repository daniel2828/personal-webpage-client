import React, { useState, useEffect } from "react";
import { Switch, List, Avatar, Button } from "antd";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import "./ListUsers.scss";
import Modal from "../../../Modal";
import EditUserForm from "../EditUserForm";
import { getAvatarApi } from "../../../../api/user";

import {
  EditOutlined,
  StopOutlined,
  DeleteOutlined,
  CheckOutlined,
} from "@ant-design/icons";
export default function ListUsers(props) {
  const { usersActive, usersInactive } = props;
  const [viewUsersActive, setViewUsersActives] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  return (
    <div className="list-users">
      <div className="list-users__switch">
        <Switch
          defaultChecked
          onChange={() => setViewUsersActives(!viewUsersActive)}
        />
        <span>
          {viewUsersActive ? "Usuarios Activos" : "Usuarios Inactivos"}
        </span>
      </div>
      {viewUsersActive ? (
        <UsersActive
          usersActive={usersActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalTitle={setModalTitle}
          setModalContent={setModalContent}
        />
      ) : (
        <UsersInactive usersInactive={usersInactive} />
      )}
      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}
function UsersActive(props) {
  const {
    usersActive,
    setIsVisibleModal,
    setModalTitle,
    setModalContent,
  } = props;

  const editUser = (user) => {
    setIsVisibleModal(true);
    setModalTitle(
      `Editar ${user.name ? user.name : "..."} ${
        user.lastname ? user.lastname : "..."
      }`
    );
    setModalContent(<EditUserForm user={user}></EditUserForm>);
  };
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={(user) => <UserActive user={user} editUser={editUser} />}
    ></List>
  );
}
function UserActive(props) {
  const { user, editUser } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);
  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => console.log("Activar usuario")}>
          <CheckOutlined />
        </Button>,

        <Button type="danger" onClick={() => console.log("Eliminar usuario")}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
        title={`
        ${user.name ? user.name : "..."}
        ${user.lastname ? user.lastname : "..."}
    `}
        description={user.email}
      />
    </List.Item>
  );
}
function UsersInactive(props) {
  const { usersInactive } = props;
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={(user) => <UserInactive user={user} />}
    ></List>
  );
}
function UserInactive(props) {
  const { user } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);
  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => console.log("Activar usuario")}>
          <CheckOutlined />
        </Button>,

        <Button type="danger" onClick={() => console.log("Eliminar usuario")}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
        title={`
        ${user.name ? user.name : "..."}
        ${user.lastname ? user.lastname : "..."}
    `}
        description={user.email}
      />
    </List.Item>
  );
}
