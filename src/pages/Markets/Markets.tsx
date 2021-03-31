import React, { Fragment, FC } from 'react';
import { BasePageProps } from '../../_infra/models/page.models';

interface MarketsProps extends BasePageProps {}

const Markets: FC<MarketsProps> = ({ translate }) => {
    return (
        <Fragment>
            <section className='markets'>
                <div className='container'>
                    <h1>{translate('markets.markets')}</h1>
                </div>
            </section>
        </Fragment>
    );
};

export default Markets;
