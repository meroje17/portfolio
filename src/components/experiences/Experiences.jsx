import React from 'react';

// Components
import Experience from './experience/Experience';

// Utils
import { experiences } from "../../constants/experiences";

const Experiences = () => (
    <>
        {experiences.map((experience, key) =>
            <Experience data={experience} key={key} />
        )}
    </>
);

Experiences.propTypes = {};

export default Experiences;
