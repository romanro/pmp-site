import React, { useCallback, useState, useEffect, useRef, useContext, FC } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { LangContext } from '../context/lang';

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

    const chooseLanguageHandler = (value: string) => {
        setShowDropdown(false);
        setLanguage(value);
    };

    return (
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
                                {translate('home')}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about' exact>
                                {translate('about')}
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
                                <ul className='dropdown-menu show' ref={dropdownEl} aria-labelledby='navbarDropdown'>
                                    <li className='dropdown-item' onClick={() => chooseLanguageHandler('EN')}>
                                        EN
                                    </li>
                                    <li className='dropdown-item' onClick={() => chooseLanguageHandler('HE')}>
                                        HE
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
