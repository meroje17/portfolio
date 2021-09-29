import React from 'react';
import styles from './Footer.module.css';

// Components
import Linkedin from '../../img/linkedin.svg';
import Twitter from '../../img/twitter.svg';
import Github from '../../img/github.svg';

const Footer = () => (
    <div className={styles.footer}>
        <a href='https://github.com/meroje17' target='_blank' rel='noreferrer'>
            <img src={Github} alt="Github logo" className={styles.network}/>
        </a>
        <a href='https://twitter.com/Meroje79' target='_blank' rel='noreferrer'>
            <img src={Twitter} alt="Twitter logo" className={styles.network}/>
        </a>
        <a href='https://www.linkedin.com/in/jérôme-guèrin/' target='_blank' rel='noreferrer'>
            <img src={Linkedin} alt="Linkedin logo" className={styles.network}/>
        </a>
        <p>@Copyrights Jérôme Guèrin</p>
    </div>
);

export default Footer;
