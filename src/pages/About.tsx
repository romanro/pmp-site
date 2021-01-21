import React, { Fragment, FC } from 'react';

interface AboutProps {
    translate: (key: string) => string;
}

const About: FC<AboutProps> = ({ translate }) => {
    return (
        <Fragment>
            <section className='about'>
                <div className='container'>
                    <h1>{translate('about')}</h1>

                    <p>{translate('aboutUsText')}</p>
                </div>
            </section>
        </Fragment>
    );
};

export default About;
