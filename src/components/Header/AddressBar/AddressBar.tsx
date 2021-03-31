import styles from './AddressBar.module.scss';
import React, { FC, useContext } from 'react';
import classnames from 'classnames';
import { LangContext } from '../../../context/lang';
import { Language } from '../../../context/language.models';

export interface AddressBarProps {}

const AddressBar: FC<AddressBarProps> = (props: AddressBarProps) => {
    const {
        state: { language },
        dispatch: { setLanguage, translate },
    } = useContext(LangContext);

    const chooseLanguage = (value: Language) => {
        setLanguage(value);
    };

    return (
        <div className={classnames(styles.AddressBar, 'navbar-expand')}>
            <div className='container'>
                <div className='row'>
                    <ul className='navbar-nav'>
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
        </div>
    );
};

export default AddressBar;
