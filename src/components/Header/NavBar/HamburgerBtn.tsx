import React, { FC } from 'react';
import styles from './NavBar.module.scss';
import classnames from 'classnames';

export interface HamburgerBtnProps {
    onClick: () => any;
    showMenu: boolean;
}

const HamburgerBtn: FC<HamburgerBtnProps> = ({ onClick, showMenu }: HamburgerBtnProps) => {
    return (
        <button
            onClick={onClick}
            className={classnames('navbar-toggler', styles.navbarToggler, 'hamburger hamburger--spin', {
                'is-active': showMenu,
            })}
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
            </span>
        </button>
    );
};

export default HamburgerBtn;
