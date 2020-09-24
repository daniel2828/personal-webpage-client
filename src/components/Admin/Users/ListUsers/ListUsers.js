import React, { useState, useEffect } from "react";
import {
  Switch,
  List,
  Avatar,
  Button,
  notification,
  Modal as ModalAntd,
} from "antd";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import "./ListUsers.scss";
import Modal from "../../../Modal";
import EditUserForm from "../EditUserForm";
import AddUserForm from "../AddUserForm";
import {
  getAvatarApi,
  activateUserApi,
  deleteUserApi,
} from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import {
  EditOutlined,
  StopOutlined,
  DeleteOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const { confirm } = ModalAntd;
export default function ListUsers(props) {
  // States
  const { usersActive, usersInactive, setReloadUsers } = props;
  const [viewUsersActive, setViewUsersActives] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const addUserModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo usuario");
    setModalContent(
      <AddUserForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadUsers={setReloadUsers}
      />
    );
  };
  //Delete confirm function shared for active and inactive users
  const showDeleteConfirm = (user) => {
    const accessToken = getAccessTokenApi();

    confirm({
      title: "Eliminando usuario",
      content: `¿Estas seguro de que quieres eliminar a ${user.email}`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteUserApi(accessToken, user._id)
          .then((response) => {
            notification["success"]({ message: response });
            setReloadUsers(true);
          })
          .catch((err) => {
            notification["error"]({ message: err });
          });
      },
    });
  };
  return (
    <div className="list-users">
      {
        <div className="list-users__header">
          <div className="list-users__switch">
            <Switch
              defaultChecked
              onChange={() => setViewUsersActives(!viewUsersActive)}
            />
            <span>
              {viewUsersActive ? "Usuarios Activos" : "Usuarios Inactivos"}
            </span>
          </div>

          <Button type="primary" onClick={addUserModal}>
            Nuevo usuario
          </Button>
        </div>
      }
      {viewUsersActive ? (
        <UsersActive
          usersActive={usersActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalTitle={setModalTitle}
          setModalContent={setModalContent}
          setReloadUsers={setReloadUsers}
          showDeleteConfirm={showDeleteConfirm}
        />
      ) : (
        <UsersInactive
          usersInactive={usersInactive}
          setReloadUsers={setReloadUsers}
          showDeleteConfirm={showDeleteConfirm}
        />
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
  // Component for active users
  const {
    usersActive,
    setIsVisibleModal,
    setModalTitle,
    setModalContent,
    setReloadUsers,
    showDeleteConfirm,
  } = props;
  // User modal form launched for users active
  const editUser = (user) => {
    setIsVisibleModal(true);
    setModalTitle(
      `Editar ${user.name ? user.name : "..."} ${
        user.lastname ? user.lastname : "..."
      }`
    );
    setModalContent(
      <EditUserForm
        user={user}
        setIsVisibleModal={setIsVisibleModal}
        setReloadUsers={setReloadUsers}
      ></EditUserForm>
    );
  };
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={(user) => (
        <UserActive
          user={user}
          editUser={editUser}
          setReloadUsers={setReloadUsers}
          showDeleteConfirm={showDeleteConfirm}
        />
      )}
    ></List>
  );
}
function UserActive(props) {
  // Component active user list element
  const { user, editUser, setReloadUsers, showDeleteConfirm } = props;
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
  // Desactivate user
  const desactivateUser = () => {
    const accesToken = getAccessTokenApi();
    activateUserApi(accesToken, user._id, false)
      .then((response) => {
        notification["success"]({ message: response });
        setReloadUsers(true);
      })
      .catch((err) => {
        notification["error"]({ message: err });
      });
  };

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editUser(user)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={desactivateUser}>
          <StopOutlined />
        </Button>,
        <Button
          type="danger"
          onClick={() => {
            showDeleteConfirm(user);
          }}
        >
          <DeleteOutlined />,
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
  // Component Users inactive
  const { usersInactive, setReloadUsers, showDeleteConfirm } = props;
  // Render list and each element with renderItem
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={(user) => (
        <UserInactive
          user={user}
          setReloadUsers={setReloadUsers}
          showDeleteConfirm={showDeleteConfirm}
        />
      )}
    ></List>
  );
}
function UserInactive(props) {
  // Component for users inactive
  const { user, setReloadUsers, showDeleteConfirm } = props;
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
  // Desactivate user
  const activateUser = () => {
    const accesToken = getAccessTokenApi();
    activateUserApi(accesToken, user._id, true)
      .then((response) => {
        notification["success"]({ message: response });
        setReloadUsers(true);
      })
      .catch((err) => {
        notification["error"]({ message: err });
      });
  };

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={activateUser}>
          <CheckOutlined />
        </Button>,

        <Button
          type="danger"
          onClick={() => {
            showDeleteConfirm(user);
          }}
        >
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
