import React, { useState } from 'react';
import './navbar.scss'
import { Anchor, Drawer, Button } from 'antd';
const { Link } = Anchor;

export const Navbar: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className="container-fluid">
            <div className='header'>
                <div className="logo">
                    <div className="fas fa-bolt"></div>
                    <a className='title-header' href="">DevInside</a>
                </div>
                <div className="mobileHidden">
                    <Anchor targetOffset={100}>
                        <Link href="#about1" title="О системе" />
                        <Link href="#advantages" title="Преимущества" />
                        <Link href="#explain-work" title="Как это работает" />
                        <Link href="#contacts" title="Контакты" />
                        <Link href="#question" title="Вопросы" />
                    </Anchor>
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
                        <div className="mobile-close" onClick={onClose}>X</div>
                        <Anchor targetOffset={120}>
                            <Link href="#about1" title="О системе" />
                            <Link href="#advantages" title="Преимущества" />
                            <Link href="#explain-work" title="Как это работает" />
                            <Link href="#contacts" title="Контакты" />
                            <Link href="#question" title="Вопросы" />
                        </Anchor>
                    </Drawer>
                </div>

            </div>

        </div>
    )
}