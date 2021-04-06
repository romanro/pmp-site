import React, { FC, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LangContext } from '../../../context/lang';
import styles from './NavBar.module.scss';
import classnames from 'classnames';
import { Language } from '../../../context/language.models';
// import useWindowSize, { WindowSize } from '../../../_infra/hooks/useWindowSize';
import HamburgerBtn from './HamburgerBtn';
import Logo from '../../Logo/Logo';

export interface NavBarProps {}

const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
    const {
        state: { language },
        dispatch: { setLanguage, translate },
    } = useContext(LangContext);

    const [showMenu, setShowMenu] = useState<boolean>(false);

    // const size: WindowSize = useWindowSize();

    const chooseLanguage = (value: Language) => {
        setShowMenu(false);
        setLanguage(value);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <span className='navbar-brand'>
                    <Logo />
                </span>
                <HamburgerBtn onClick={() => toggleMenu()} showMenu={showMenu} />

                <div
                    className={classnames('navbar-collapse', showMenu ? styles.show : '', styles.collapsing)}
                    id='navbarSupportedContent'>
                    <ul className={classnames('navbar-nav', styles.navbarNav)}>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/tech' exact onClick={() => setShowMenu(false)}>
                                {translate('tech.tech')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/markets' exact onClick={() => setShowMenu(false)}>
                                {translate('markets.markets')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/standards' exact onClick={() => setShowMenu(false)}>
                                {translate('standards.standards')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/products' exact onClick={() => setShowMenu(false)}>
                                {translate('products.products')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about' exact onClick={() => setShowMenu(false)}>
                                {translate('about.about')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contact' exact onClick={() => setShowMenu(false)}>
                                {translate('contact.contact')}
                            </NavLink>
                        </li>
                        {language !== Language.English && (
                            <li className={classnames('nav-item', styles.langBtn, styles.en)}>
                                <button
                                    onClick={() => chooseLanguage(Language.English)}
                                    className={classnames('btn btn-sm btn-link', styles.navLink)}>
                                    ENGLISH
                                </button>
                            </li>
                        )}
                        {language !== Language.Hebrew && (
                            <li className={classnames('nav-item', styles.langBtn, styles.he)}>
                                <button
                                    onClick={() => chooseLanguage(Language.Hebrew)}
                                    className={classnames('btn btn-sm btn-link', styles.navLink)}>
                                    עברית
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
