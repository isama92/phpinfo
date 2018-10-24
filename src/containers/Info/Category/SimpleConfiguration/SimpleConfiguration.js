import React from 'react';
import PropTypes from 'prop-types';
import HTMLEntities from 'html-entities';

import classes from './SimpleConfiguration.module.css';

const simpleConfiguration = props => {
    const entities = new HTMLEntities.AllHtmlEntities();
    return (
        <div className={classes.Container}>
            <div className={classes.Name}>{entities.decode(props.name)}</div>
            <div className={classes.Value}>{entities.decode(props.data)}</div>
        </div>
    );
};

simpleConfiguration.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
};

export default simpleConfiguration;
