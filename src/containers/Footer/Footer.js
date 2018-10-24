import React, { Component } from 'react';
import { Layout, Icon } from 'antd';

import classes from './Footer.module.css';


class Footer extends Component {
    render() {
        return (
            <Layout.Footer className={classes.Footer}>
                <div>Server PHP Info - <Icon type="copyright"/> <a href="https://stefano-borzoni.com" target="_BLANK" rel="noopener noreferrer">Stefano Borzoni</a></div>
            </Layout.Footer>
        );
    }
}

export default Footer;
