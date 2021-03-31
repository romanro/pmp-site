import React, { Fragment, FC } from 'react';
import { BasePageProps } from '../../_infra/models/page.models';

interface StandardsProps extends BasePageProps {}

const Standards: FC<StandardsProps> = ({ translate }) => {
    return (
        <Fragment>
            <section className='standards'>
                <div className='container'>
                    <h1>{translate('standards.standards')}</h1>
                </div>
            </section>
        </Fragment>
    );
};

export default Standards;
