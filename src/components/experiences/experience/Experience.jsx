import React from 'react';
import styles from '../Experiences.module.css';
import { object } from 'prop-types'

// Components
import Competence from '../competence/Competence';
import OpenClassrooms from '../../../img/openclassrooms.svg';
import CodeSchool from '../../../img/codeSchool.svg';
import Amiltone from '../../../img/amiltone.svg';

const Experience = ({ data }) => {
    const { 
        image, 
        alt, 
        title, 
        subtitle, 
        duration, 
        description, 
        competences,
        link
    } = data ;

    const logo = (() => {
        switch(image) {
            case 'openclassrooms':
                return OpenClassrooms;
            case 'amiltone':
                return Amiltone;
            case 'codeSchool':
            default:
                return CodeSchool;
        }
    })();

    return (
        <div className={styles.experience}>
            <div className={styles.leftSide}>
                <a href={link} target='_blank' rel='noreferrer'>
                    <img src={logo} alt={alt} className={styles.logo} />
                </a>
                <div className={styles.verticalDivider} />
            </div>
            <div className={styles.rightSide}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <h4>{duration}</h4>
                <p>{description}</p>
                <div className={styles.competences}>
                    {competences && competences.map((competence, key) => 
                        <Competence data={competence} key={key} />
                    )}
                </div>
            </div>
        </div>
    );
};

Experience.propTypes = {
    data: object.isRequired
};

export default Experience;
