import React, { Component } from 'react';
import axios from "axios";
import {Layout, Breadcrumb, Icon, List, Card, BackTop, message, Input} from 'antd';

import { server_path } from "../../appConfig";

import classes from './Extensions.module.css';


class Extensions extends Component {
    state = {
        extensions: [],
        search: '',
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
        const extensions = this.state.extensions.filter(extension => extension.includes(this.state.search));
        return (
            <Layout.Content className={classes.Container}>
                <BackTop />
                <Breadcrumb style={{marginBottom: 20}}>
                    <Breadcrumb.Item><Icon type="home"/></Breadcrumb.Item>
                    <Breadcrumb.Item>Extensions</Breadcrumb.Item>
                </Breadcrumb>
                <div className={classes.Search}>
                    <div className={classes.Input}>
                        <Input
                            placeholder="Search extension..."
                            onChange={e => this.setState({search: e.target.value})}
                            addonBefore={<Icon type="search"/>}
                            size="large"
                        />
                    </div>
                </div>
                <List
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                    dataSource={extensions}
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
