import React, { Fragment, FC } from 'react';

interface HomepageProps {
    translate: (key: string) => string;
}

const Homepage: FC<HomepageProps> = ({ translate }) => {
    return (
        <Fragment>
            <section className='intro'>
                <div className='intro__overlay'></div>
                <div className='intro__body'>
                    <p>{translate('home.introText')}</p>
                </div>
            </section>
        </Fragment>
    );
};

export default Homepage;
