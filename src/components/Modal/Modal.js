import React from "react";
import { Modal as ModalAntd } from "antd";
export default function Modal(props) {
  const { children, title, isVisible, setIsVisible, ...other } = props;
   // MODAL design
  // V
  return (
    <ModalAntd
      title={title}
      centered
      visible={isVisible}
      onCancel={() => setIsVisible(false)}
      {...other}
    >
      {children}
    </ModalAntd>
  );
}
