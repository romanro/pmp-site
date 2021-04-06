import React, { FC, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/HomePage/Homepage';
import About from './pages/About/About';
import Page404 from './pages/404';
import { LangContext } from './context/lang';
import Header from './components/Header/Header';
import ContactUs from './pages/ConactUs/ContactUs';
import Tech from './pages/Tech/Tech';
import Markets from './pages/Markets/Markets';
import Standards from './pages/Standards/Standards';
import Products from './pages/Products/Products';
import Footer from './components/Footer/Footer';
import Page from './_infra/hoc/Page';

const App: FC<any> = () => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    return (
        <BrowserRouter basename=''>
            <Header />
            <div className='content-container'>
                <Switch>
                    <Route path='/' exact>
                        <Page title='home' translate={translate}>
                            <Homepage translate={translate} />
                        </Page>
                    </Route>
                    <Route path='/tech' exact>
                        <Page title='tech' translate={translate}>
                            <Tech translate={translate} />
                        </Page>
                    </Route>
                    <Route path='/markets' exact>
                        <Page title='markets' translate={translate}>
                            <Markets translate={translate} />
                        </Page>
                    </Route>
                    <Route path='/standards' exact>
                        <Page title='standards' translate={translate}>
                            <Standards translate={translate} />
                        </Page>
                    </Route>
                    <Route path='/products' exact>
                        <Page title='products' translate={translate}>
                            <Products translate={translate} />
                        </Page>
                    </Route>
                    <Route path='/about' exact>
                        <Page title='about' translate={translate}>
                            <About translate={translate} />
                        </Page>
                    </Route>
                    <Route path='/contact' exact>
                        <Page title='contact' translate={translate}>
                            <ContactUs translate={translate} />
                        </Page>
                    </Route>
                    <Route path='*'>
                        <Page title='page404' translate={translate}>
                            <Page404 translate={translate} />
                        </Page>
                    </Route>
                </Switch>
                <Footer translate={translate} />
            </div>
        </BrowserRouter>
    );
};

export default App;
