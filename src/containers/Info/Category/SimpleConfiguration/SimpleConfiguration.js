import React from 'react';
import PropTypes from 'prop-types';

import classes from './SimpleConfiguration.module.css';

const simpleConfiguration = props => {
    return (
        <div className={classes.Container}>
            <div className={classes.Name}>{props.name}</div>
            <div className={classes.Value}>{props.data}</div>
        </div>
    );
};

simpleConfiguration.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
};

export default simpleConfiguration;
