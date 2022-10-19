import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Clients = ({ match }) => {
    return(
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Route path={`${match.url}/address`} component={lazy(() => import(`./address`))} />
                <Route path={`${match.url}/geofence`} component={lazy(() => import(`./geofence`))} />
                <Redirect from={`${match.url}`} to={`${match.url}/address`} />
            </Switch>
        </Suspense>
    )};

export default Clients;