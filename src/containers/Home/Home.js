import React, { Component } from 'react';
import { Layout } from 'antd';

import classes from './Home.module.css';


class Home extends Component {
    render() {
        return (
            <Layout.Content className={classes.Container}>
                Home
            </Layout.Content>
        );
    }
}

export default Home;
