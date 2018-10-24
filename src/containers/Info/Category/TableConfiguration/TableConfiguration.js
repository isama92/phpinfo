import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import HTMLEntities from 'html-entities';
import { Table } from 'antd';

import classes from './TableConfiguration.module.css';

const tableConfiguration = props => {
    const columns = [{
        title: 'Directive',
        dataIndex: 'directive',
        key: 'directive',
        width: '30%',
        className: classes.Directive,
        align: 'right',
    }, {
        title: 'Local',
        dataIndex: 'local',
        key: 'local',
        width: '35%',
    }, {
        title: 'Master',
        dataIndex: 'master',
        key: 'master',
        width: '35%',
    }];

    const entities = new HTMLEntities.AllHtmlEntities();
    const data = props.data.map(row => {return {directive: entities.decode(row.directive), local: entities.decode(row.data.local), master: entities.decode(row.data.master), key: uuid()}});

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    );
};

tableConfiguration.propTypes = {
    data: PropTypes.array.isRequired,
};

export default tableConfiguration;
