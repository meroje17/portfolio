import React from 'react';
import styles from './Home.module.css';

// Components
import Profil from '../profil/Profil';

// Utils
import { calculateYearsOld } from '../../utils/date';

const Home = () => (
    <div className={styles.homeContainer}>
        <Profil />
        <div className={styles.description}>
            <h1>Hi, I'm Jérôme 👋</h1>
            <p>{calculateYearsOld()}y - Developer</p>
        </div>
    </div>
);

export default Home;
