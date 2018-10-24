import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import SimpleConfiguration from './SimpleConfiguration/SimpleConfiguration';
import TableConfiguration from './TableConfiguration/TableConfiguration';

import classes from './Category.module.css';

const category = props => {
    const data = [];
    let tableData = [];
    for(const cfg in props.data) {
        if(typeof props.data[cfg] === 'string') {
            data.push(<SimpleConfiguration key={uuid()} name={cfg} data={props.data[cfg]}/>)
            if(tableData.length > 0) {
                data.push(<TableConfiguration key={uuid()} data={tableData}/>);
                tableData = [];
            }
        }
        else
            tableData.push({directive: cfg, data: props.data[cfg]});
    }

    if(tableData.length > 0)
        data.push(<TableConfiguration key={uuid()} data={tableData}/>);

    return (
        <div className={classes.Container}>
            <div className={classes.Title}><h2>{props.title}</h2></div>
            {data}
        </div>
    );
};

category.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
};

export default category;
