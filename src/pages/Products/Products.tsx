import React, { Fragment, FC } from 'react';
import { BasePageProps } from '../../_infra/models/page.models';

interface ProductsProps extends BasePageProps {}

const Products: FC<ProductsProps> = ({ translate }) => {
    return (
        <Fragment>
            <section className='products'>
                <div className='container'>
                    <h1>{translate('products.products')}</h1>
                </div>
            </section>
        </Fragment>
    );
};

export default Products;
