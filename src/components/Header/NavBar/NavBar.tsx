import React, { FC, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LangContext } from '../../../context/lang';
import styles from './NavBar.module.scss';
import classnames from 'classnames';
import { Language } from '../../../context/language.models';

export interface NavBarProps {}

const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
    const {
        state: { language },
        dispatch: { setLanguage, translate },
    } = useContext(LangContext);

    const chooseLanguage = (value: Language) => {
        setLanguage(value);
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <span className='navbar-brand'>
                    <Link to='/'>PMP</Link>
                </span>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div
                    className={classnames('collapse', 'navbar-collapse', styles.navbarCollapse)}
                    id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/tech' exact>
                                {translate('tech.tech')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/markets' exact>
                                {translate('markets.markets')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/standards' exact>
                                {translate('standards.standards')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/products' exact>
                                {translate('products.products')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about' exact>
                                {translate('about.aboutUs')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contact' exact>
                                {translate('contact.contactUs')}
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={classnames(styles.LanguageBar, 'navbar-nav')}>
                        {language !== Language.English && (
                            <li className='nav-item'>
                                <button
                                    onClick={() => chooseLanguage(Language.English)}
                                    className={classnames('btn btn-sm btn-link nav-link', styles.navLink)}>
                                    English
                                </button>
                            </li>
                        )}
                        {language !== Language.Hebrew && (
                            <li className='nav-item'>
                                <button
                                    onClick={() => chooseLanguage(Language.Hebrew)}
                                    className={classnames('btn btn-sm btn-link nav-link', styles.navLink)}>
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
