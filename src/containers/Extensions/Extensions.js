import React, { Component } from 'react';
import axios from "axios";
import { Layout, Breadcrumb, Icon, List, Card, BackTop, message } from 'antd';

import { server_path } from "../../appConfig";

import classes from './Extensions.module.css';


class Extensions extends Component {
    state = {
        extensions: [],
    };

    componentDidMount() {
        axios.post(server_path, {
            extensions: true,
        })
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        extensions: res.data.extensions,
                    });
                } else
                    message.error('Unknown error!');
            })
            .catch(err => {
                message.error('Unknown error!');
                console.error(err);
            });
    }

    render() {
        return (
            <Layout.Content className={classes.Container}>
                <BackTop />
                <Breadcrumb style={{marginBottom: 20}}>
                    <Breadcrumb.Item><Icon type="home"/></Breadcrumb.Item>
                    <Breadcrumb.Item>Extensions</Breadcrumb.Item>
                </Breadcrumb>
                <List
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                    dataSource={this.state.extensions}
                    renderItem={item => (
                        <List.Item>
                            <Card hoverable={true}>{item}</Card>
                        </List.Item>
                    )}
                />
            </Layout.Content>
        );
    }
}

export default Extensions;
