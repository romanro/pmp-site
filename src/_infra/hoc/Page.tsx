import { useEffect, FC } from 'react';
import { BasePageProps } from '../models/page.models';

interface PageProps extends BasePageProps {
    title?: string;
}

type MixedPageProps = PageProps & any;

const Page: FC<MixedPageProps> = ({ title, translate, children }: MixedPageProps) => {
    useEffect(() => {
        const pageTitle = `${translate('common.basicTitle')} : ${title ? translate(title + '.' + title) : ''}`;
        document.title = pageTitle;
    }, [title, translate]);
    return children;
};

export default Page;
