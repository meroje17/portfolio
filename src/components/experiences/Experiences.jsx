import React from 'react';
import styles from './Experiences.module.css';

// Components
import Experience from './experience/Experience';

// Utils
import { experiences } from "../../constants/experiences";

const Experiences = () => (
    <div className={styles.experiences}>
        {experiences.map((experience, key) =>
            <Experience data={experience} key={key} />
        )}
    </div>
);

Experiences.propTypes = {};

export default Experiences;
