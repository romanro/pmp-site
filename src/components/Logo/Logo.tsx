import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export interface LogoProps {}

const Logo: FC = (props: LogoProps) => {
    return <Link to='/'>PMP</Link>;
};

export default Logo;
