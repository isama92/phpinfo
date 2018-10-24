import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { Table } from 'antd';

const tableConfiguration = props => {
    const columns = [{
        title: 'Directive',
        dataIndex: 'directive',
        key: 'directive',
        width: '30%',
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

    const data = props.data.map(row => {return {directive: row.directive, local: row.data.local, master: row.data.master, key: uuid()}});

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
