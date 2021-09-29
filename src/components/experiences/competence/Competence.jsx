import React from 'react';
import styles from '../Experiences.module.css';

// Components
import Javascript from '../../../img/javascript.svg';
import Algorithm from '../../../img/algorithm.svg';
import LangageC from '../../../img/langageC.svg';
import ReactJS from '../../../img/reactjs.svg';
import NodeJS from '../../../img/nodejs.svg';
import Devops from '../../../img/devops.svg';
import Clean from '../../../img/clean.svg';
import Swift from '../../../img/swift.svg';
import Bash from '../../../img/bash.svg';
import Java from '../../../img/java.svg';
import HTML from '../../../img/html.svg';
import CSS from '../../../img/css.svg';

const Competence = ({ data }) => {
    const logo = (() => {
        switch(data) {
            case 'NodeJS':
                return NodeJS;
            case 'Devops':
                return Devops;
            case 'Java':
                return Java;
            case 'HTML':
                return HTML;
            case 'CSS':
                return CSS;
            case 'ReactJS':
                return ReactJS;
            case 'Javascript':
                return Javascript;
            case 'Clean code':
                return Clean;
            case 'Swift':
                return Swift;
            case 'C':
                return LangageC;
            case 'Algorithm':
                return Algorithm;
            case 'Shell':
            default:
                return Bash;
        }
    })();

    return (
        <div className={styles.competenceContainer}>
            <img src={logo} alt={data} className={styles.competence} />
            <p>{data}</p>
        </div>
    );
};

Competence.propTypes = {};

export default Competence;
