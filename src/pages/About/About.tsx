import React, { Fragment, FC } from 'react';
import { BasePageProps } from '../../_infra/models/page.models';

interface AboutProps extends BasePageProps {}

const About: FC<AboutProps> = ({ translate }) => {
    return (
        <Fragment>
            <section className='about'>
                <div className='container'>
                    <h1>{translate('about.aboutUs')}</h1>

                    <p>{translate('about.aboutUsText')}</p>
                </div>
            </section>
        </Fragment>
    );
};

export default About;
