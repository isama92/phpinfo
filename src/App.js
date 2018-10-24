import React, { Component } from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Home from './containers/Home/Home';
import Extensions from './containers/Extensions/Extensions';
import Info from './containers/Info/Info';

class App extends Component {
    state = {
        info: {},
        extensions: {},
    };

    render() {
        return (
            <Layout>
                <Header/>
                <Layout style={{background: '#FFF', paddingBottom: (this.props.isAuth ? '48px' : '0')}}>
                    <Switch>
                        <Route key="home" path="/" exact component={Home}/>,
                        <Route key="info" path="/info" component={Info}/>,
                        <Route key="extensions" path="/extensions" component={Extensions}/>,
                        <Redirect to="/"/>
                    </Switch>
                </Layout>
                <Footer/>
            </Layout>
        );
    }
}

export default withRouter(App);
