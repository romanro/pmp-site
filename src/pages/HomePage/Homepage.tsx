import React, { Fragment, FC } from 'react';
import { BasePageProps } from '../../_infra/models/page.models';
import BannersCarousel from './Banners/BannersCarousel';

interface HomepageProps extends BasePageProps {}

const Homepage: FC<HomepageProps> = ({ translate }: HomepageProps) => {
    return (
        <Fragment>
            <section className='intro'>
                <div className='container'>
                    <BannersCarousel translate={translate} />
                </div>
                <div className='intro__body'></div>
            </section>
        </Fragment>
    );
};

export default Homepage;
