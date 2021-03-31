import React, { useCallback, useState, useEffect, useRef, useContext, FC, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { LangContext } from '../../context/lang';
import { Language } from '../../context/language.models';
import AddressBar from './AddressBar/AddressBar';
import styles from './Header.module.scss';

const Header: FC<any> = () => {
    const {
        state: { language },
        dispatch: { setLanguage, translate },
    } = useContext(LangContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownEl = useRef<HTMLUListElement>(null);

    const handleClickOutside = useCallback(
        (e) => {
            if (showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
                setShowDropdown(false);
            }
        },
        [showDropdown, setShowDropdown, dropdownEl]
    );

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    const chooseLanguageHandler = (value: Language) => {
        setShowDropdown(false);
        setLanguage(value);
    };

    return (
        <Fragment>
            <AddressBar />
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <span className='navbar-brand'>
                        <Link to='/'>React</Link>
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

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/' exact>
                                    {translate('home.home')}
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/about' exact>
                                    {translate('about.aboutUs')}
                                </NavLink>
                            </li>
                            <li className='nav-item dropdown'>
                                <button
                                    className='nav-link dropdown-toggle'
                                    id='navbarDropdown'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    onClick={() => setShowDropdown(!showDropdown)}>
                                    {language}
                                </button>
                                {showDropdown && (
                                    <ul
                                        className='dropdown-menu show'
                                        ref={dropdownEl}
                                        aria-labelledby='navbarDropdown'>
                                        <li
                                            className='dropdown-item'
                                            onClick={() => chooseLanguageHandler(Language.English)}>
                                            EN
                                        </li>
                                        <li
                                            className='dropdown-item'
                                            onClick={() => chooseLanguageHandler(Language.Hebrew)}>
                                            HE
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;
