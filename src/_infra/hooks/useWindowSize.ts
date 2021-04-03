import { useEffect, useState } from 'react';
import { MOBILE_VIEW_TRIGGER } from '../constants/responcive-grid.consts';

type Size = number | undefined;

export interface WindowSize {
    width: Size;
    height: Size;
    isMobile: boolean;
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
        isMobile: false,
    });

    useEffect(() => {
        const handleResize = (): void => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth < MOBILE_VIEW_TRIGGER,
            });
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize;
