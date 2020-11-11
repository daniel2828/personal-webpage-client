import React, { useState, useEffect} from 'react'
import { Switch, List, Button, Modal as ModalAntd, notification } from "antd";
    
import Modal from "../../../Modal";
import DragSortableList from "react-drag-sortable";
import { updateNavigationApi, activateNavigationApi, deleteNavigationApi} from "../../../../api/navigation";
import { getAccessTokenApi } from "../../../../api/auth";
import "./NavigationWebList.scss";
import { DeleteOutlined, EditOutlined} from "@ant-design/icons";
import AddNavigationWebForm from "../AddNavigationWebForm";
import EditNavigationWebForm from "../EditNavigationWebForm";

const { confirm } = ModalAntd;
export default function NavigationWebList(props) {
    const { navigation, setReloadNavigation } = props;
    const [listItems, setListItems] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    const activateNavigation = (deleteNavigationApi, status) => { 
        const accessToken = getAccessTokenApi();
        activateNavigationApi(accessToken, deleteNavigationApi._id, status).
            then(response => { 
                notification["success"]({
                    message:response
                })
            })
    }
    const onSort = (sortedList) => { 
        const accessToken = getAccessTokenApi();
        sortedList.forEach(item => {
            const { _id } = item.content.props.item;
            const order = item.rank;
            updateNavigationApi(accessToken, _id, { order });
        });
    }
 useEffect(() => { 

        const listItemsArray = [];
        navigation.forEach(item => {
            listItemsArray.push({
                content: <NavigationItem item={item} activateNavigation={activateNavigation} editNavigationWebModal={editNavigationWebModal} deleteNavigation={deleteNavigation}></NavigationItem>
            })
        });
        setListItems(listItemsArray);
    }, [navigation])

    const addNavigationWebModal = () => { 
        setIsVisibleModal(true);
        setModalTitle("Creando nuevo navigation");
        setModalContent(
            <AddNavigationWebForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadNavigation={setReloadNavigation}
            ></AddNavigationWebForm>
        )

    }

    const editNavigationWebModal = (navigation) => { 
        setIsVisibleModal(true);
        setModalTitle(`Editando navigation. ${navigation.title}`);
        setModalContent(
            <EditNavigationWebForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadNavigation={setReloadNavigation}
                navigation={navigation}
            />
        )
    }
    const deleteNavigation = (navigation) => { 
        const accessToken = getAccessTokenApi();
        const id = navigation._id;

         confirm({
            title: "Eliminando menú",
            content: `¿Estas seguro de que quieres eliminar el navigation: ${navigation.title}`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                 deleteNavigationApi(accessToken, id)
                .then((response) => {
                    notification["success"]({ message: response });
                    setReloadNavigation(true);
                })
                .catch((err) => {
                    notification["error"]({ message: err });
                });
            },
        });
       

       

    }

    return (
        <div className="deleteNavigationApi-web-list">
            <div className="deleteNavigationApi-web-list__header">
                <Button type="primary" onClick={addNavigationWebModal}>Crear menú</Button>
            </div>
            <div className="deleteNavigationApi-web-list__items">
                <DragSortableList items={listItems} onSort={onSort} type="vertical"></DragSortableList>
            </div>
            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={
                    setIsVisibleModal
                }>
                {modalContent}
            </Modal>
        </div>
    )
}
function NavigationItem(props) { 
    const { item, activateNavigation , editNavigationWebModal, deleteNavigation} = props;
    return (
        <List.Item
            actions={[
                <Switch defaultChecked={item.active} onChange={e => { 
                    activateNavigation(item, e);
                }}/>,
                <Button type="primary" onClick={()=>editNavigationWebModal(item)}>
                   <EditOutlined></EditOutlined>
                </Button>,
                <Button type="danger" onClick={() => deleteNavigation(item)}>
                   <DeleteOutlined></DeleteOutlined>
                </Button>
            ]}
        >
            <List.Item.Meta title={item.title} description={item.url}></List.Item.Meta>
        </List.Item>
    )
}