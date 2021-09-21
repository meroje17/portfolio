import React from 'react';
import styles from './Profil.module.css';

// Components
import me from '../../img/me.png';

const Profil = () => (
    <div className={styles.profil}>
        <img className={styles.picture} src={me}  alt="me" />
        <p className={styles.statusOccuped}>ON MISSION</p>
    </div>
);

export default Profil;