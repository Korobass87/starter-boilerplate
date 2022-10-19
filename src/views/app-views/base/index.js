import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Base = ({ match }) => {
    return(
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
                <Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
                <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
                <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
                <Route path={`${match.url}/promo`} component={lazy(() => import(`./promo-cods`))} />
                <Route path={`${match.url}/offline`} component={lazy(() => import(`./offline-store`))} />
                <Route path={`${match.url}/employees`} component={lazy(() => import(`./employees`))} />
                <Route path={`${match.url}/mailing`} component={lazy(() => import(`./mailing`))} />
                <Redirect from={`${match.url}`} to={`${match.url}/home`} />
            </Switch>
        </Suspense>
    )};

export default Base;