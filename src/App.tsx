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
                        <Homepage translate={translate} />
                    </Route>
                    <Route path='/tech' exact>
                        <Tech translate={translate} />
                    </Route>
                    <Route path='/markets' exact>
                        <Markets translate={translate} />
                    </Route>
                    <Route path='/standards' exact>
                        <Standards translate={translate} />
                    </Route>
                    <Route path='/products' exact>
                        <Products translate={translate} />
                    </Route>
                    <Route path='/about' exact>
                        <About translate={translate} />
                    </Route>
                    <Route path='/contact' exact>
                        <ContactUs translate={translate} />
                    </Route>
                    <Route path='*'>
                        <Page404 translate={translate} />
                    </Route>
                </Switch>
                <Footer translate={translate} />
            </div>
        </BrowserRouter>
    );
};

export default App;
