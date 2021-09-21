import React from 'react';
import styles from './Logo.module.css';
import { string } from 'prop-types';

// Utils

const Logo = ({ source, description }) => (
    <img 
        src={source} 
        alt={description}
        className={styles.logo}
    />
);

Logo.propTypes = {
    description: string.isRequired,
    source: string.isRequired,
};

export default Logo;
