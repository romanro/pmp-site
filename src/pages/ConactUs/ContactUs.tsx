import React, { Fragment, FC } from 'react';
import { BasePageProps } from '../../_infra/models/page.models';

interface ContactProps extends BasePageProps {}

const ContactUs: FC<ContactProps> = ({ translate }) => {
    return (
        <Fragment>
            <section className='contact'>
                <div className='container'>
                    <h1>{translate('contact.contact')}</h1>
                </div>
            </section>
        </Fragment>
    );
};

export default ContactUs;
