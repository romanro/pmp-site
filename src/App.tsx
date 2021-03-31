import React, { FC, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/HomePage/Homepage';
import About from './pages/About/About';
import Page404 from './pages/404';
import { LangContext } from './context/lang';
import Header from './components/Header/Header';

const App: FC<any> = () => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    return (
        <BrowserRouter basename=''>
            <Header />
            <Switch>
                <Route path='/' exact>
                    <Homepage translate={translate} />
                </Route>
                <Route path='/about' exact>
                    <About translate={translate} />
                </Route>
                <Route path='*'>
                    <Page404 translate={translate} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
