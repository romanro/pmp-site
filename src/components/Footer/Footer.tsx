import classnames from 'classnames';
import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {
    translate: (key: string) => string;
}

const Footer: FC<FooterProps> = ({ translate }) => {
    return <footer className={classnames(styles.footer, 'navbar')}></footer>;
};

export default Footer;
