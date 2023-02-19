import React, { useState } from "react";
import "./navbar.scss";
import { Anchor, Drawer, Button } from "antd";
const { Link } = Anchor;

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const items = [
    {
      key: "about1",
      href: "#about1",
      title: "О системе",
    },
    {
      key: "advantages",
      href: "#advantages",
      title: "Преимущества",
    },
    {
      key: "explain-work",
      href: "#explain-work",
      title: "Как это работает",
    },
    {
      key: "contacts",
      href: "#contacts",
      title: "Контакты",
    },
    {
      key: "question",
      href: "#question",
      title: "Вопросы",
    },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <div className="fas fa-bolt"></div>
          <a className="title-header" href="d">
            DevInside
          </a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={100} items={items} />
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            open={visible}
          >
            <div className="mobile-close" onClick={onClose}>
              X
            </div>
            <Anchor targetOffset={120} items={items} />
          </Drawer>
        </div>
      </div>
    </div>
  );
};
