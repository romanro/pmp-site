import React, { Fragment, FC } from 'react';
import { BasePageProps } from '../../_infra/models/page.models';

interface TechProps extends BasePageProps {}

const Tech: FC<TechProps> = ({ translate }) => {
    return (
        <Fragment>
            <section className='tech'>
                <div className='container'>
                    <h1>{translate('tech.tech')}</h1>
                </div>
            </section>
        </Fragment>
    );
};

export default Tech;
