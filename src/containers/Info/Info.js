import React, { Component } from 'react';
import axios from "axios";
import { Layout, Breadcrumb, Icon, Input, BackTop, Alert, Spin } from 'antd';

import Category from './Category/Category';

import { server_path } from "../../appConfig";

import classes from './Info.module.css';


class Info extends Component {
    state = {
        ready: false,
        info: {},
        search: '',
    };

    componentDidMount() {
        axios.post(server_path, {
            info: true,
        })
            .then(res => {
                if(res.data.success)
                    this.setState({
                        info: res.data.info,
                        ready: true,
                    });
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    ready: true,
                });
            });
    }

    getInfoData = () => {
        const info = this.state.info;
        let res = {};
        const search = this.state.search.toLowerCase();
        if(search !== '')
            for(const cat in info) {
                // check category name
                if(cat.toLowerCase().includes(search))
                    res[cat] = info[cat];
                else
                    for(const cfg in info[cat]) {
                        // check configuration label
                        if(cfg.toLowerCase().includes(search)) {
                            if(!(cat in res))
                                res[cat] = {};
                            res[cat][cfg] = info[cat][cfg];
                        }
                        else
                            // check configuration value string
                            if(typeof info[cat][cfg] === 'string') {
                                if(info[cat][cfg].toLowerCase().includes(search)) {
                                    if(!(cat in res))
                                        res[cat] = {};
                                    res[cat][cfg] = info[cat][cfg];
                                }
                            } else {
                                // check configuration value object
                                for(const k in info[cat][cfg]) {
                                    if(k.toLowerCase().includes(search) || info[cat][cfg][k].includes(search)) {
                                        if(!(cat in res))
                                            res[cat] = {};
                                        if(!(cfg in res[cat]))
                                            res[cat][cfg] = {};
                                        if(!(k in res[cat][cfg]))
                                            res[cat][cfg][k] = {};
                                        res[cat][cfg][k] = info[cat][cfg][k];
                                    }
                                }
                            }
                    }
            }
        else
            res = info;
        return res;
    };

    render() {
        const data = [];
        const info = this.getInfoData();
        for(const cat in info)
            data.push(<Category key={cat} title={cat} data={info[cat]}/>)
        return (
            <Layout.Content className={classes.Container}>
                <BackTop />
                <Breadcrumb style={{marginBottom: 20}}>
                    <Breadcrumb.Item><Icon type="home"/></Breadcrumb.Item>
                    <Breadcrumb.Item>Info</Breadcrumb.Item>
                </Breadcrumb>
                <div className={classes.Search}>
                    <div className={classes.Input}>
                        <Input
                            placeholder="Search configuration..."
                            onChange={e => this.setState({search: e.target.value})}
                            addonBefore={<Icon type="search"/>}
                            size="large"
                        />
                    </div>
                </div>
                { !this.state.ready ? <div className={classes.Spinner}><Spin size="large"/></div> :
                        Object.keys(info).length === 0 && info.constructor === Object?
                            <Alert
                                message="Error"
                                description="Error while retrieving information from server."
                                type="error"
                            />
                        : data }
            </Layout.Content>
        );
    }
}

export default Info;
