import React, { FC } from 'react';
import styles from './BannersCarousel.module.scss';
import OwlCarousel, { OwlCarouselProps } from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Banner from './Banner';
import classnames from 'classnames';

export interface BannersCarouselProps {
    translate: (key: string) => string;
}

const BannersCarousel: FC<BannersCarouselProps> = ({ translate }: BannersCarouselProps) => {
    const carouselClasses: Partial<OwlCarouselProps> = {
        stageOuterClass: styles.stageOuterClass,
        navContainerClass: styles.navContainerClass,
        navClass: [styles.prevBtn, styles.nextBtn],
        dotClass: classnames(styles.dotClass, 'owl-dot'),
    };
    return (
        <div className={styles.bannerContainer}>
            <OwlCarousel
                {...carouselClasses}
                items={1}
                className='owl-theme'
                loop
                nav
                navText={['<i class="fas fa-arrow-right"></i>', '<i class="fas fa-arrow-left"></i>']}
                margin={8}>
                <Banner translate={translate} />
                <Banner translate={translate} />
                <Banner translate={translate} />
                <Banner translate={translate} />
                <Banner translate={translate} />
                <Banner translate={translate} />
            </OwlCarousel>
        </div>
    );
};

export default BannersCarousel;
