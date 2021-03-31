import React, { FC, Fragment } from 'react';

import AddressBar from './AddressBar/AddressBar';

import NavBar from './NavBar/NavBar';

const Header: FC<any> = () => {
    return (
        <Fragment>
            <AddressBar />
            <NavBar />
        </Fragment>
    );
};

export default Header;
