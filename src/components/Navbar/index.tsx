import React, { useState } from "react";
import "./navbar.scss";
import { Anchor, Drawer } from "antd";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const items = [
    {
      key: "about",
      href: "#about",
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
          <a target="_blank" rel="noreferrer" href="https://dev-inside.ru/">
            <img alt="logo" className="logo-img" src={logo} />
          </a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={100} items={items} />
        </div>
        <div className="mobileVisible">
          {/* <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button> */}
          <div className="burger" onClick={showDrawer}>
            <FiMenu size={30} />
          </div>

          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            open={visible}
          >
            <div className="mobile-close" onClick={onClose}>
              <FiX size={30} />
            </div>
            <Anchor targetOffset={120} items={items} />
          </Drawer>
        </div>
      </div>
    </div>
  );
};
