import React, { FC } from 'react';
import styles from './BannersCarousel.module.scss';

export interface BannerProps {
    translate: (key: string) => string;
}

const Banner: FC<BannerProps> = ({ translate }: BannerProps) => {
    return (
        <div className={styles.banner}>
            <div>banner</div>
        </div>
    );
};

export default Banner;
