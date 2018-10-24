import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

import { website_url } from "../../appConfig";

import classes from './Header.module.css';


class Header extends Component {
    render() {
        return (
            <Layout.Header className={classes.Header}>
                <Menu
                    defaultSelectedKeys={[this.props.location.pathname.replace('/', '')]}
                    theme="dark"
                    mode="horizontal"
                    style={{lineHeight: '64px'}}
                    breakpoint="lg"
                >
                    <Menu.Item key="home" onClick={() => this.props.history.push('home')}>
                        <Icon type="home"/>
                        Home
                    </Menu.Item>
                    <Menu.Item key="info" onClick={() => this.props.history.push('info')}>
                        <Icon type="info-circle"/>
                        Info
                    </Menu.Item>
                    <Menu.Item key="extensions" onClick={() => this.props.history.push('extensions')}>
                        <Icon type="build"/>
                        Extensions
                    </Menu.Item>
                    <Menu.Item key="website" onClick={() => window.location = website_url}>
                        <Icon type="global"/>
                        Go to Website
                    </Menu.Item>
                </Menu>
            </Layout.Header>
        );
    }
}

export default withRouter(Header);
