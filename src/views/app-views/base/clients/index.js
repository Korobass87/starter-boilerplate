import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Clients = ({ match }) => {
    return(
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Route path={`${match.url}/list`} component={lazy(() => import(`./clients-list`))} />
                <Route path={`${match.url}/group`} component={lazy(() => import(`./clients-group`))} />


                <Redirect from={`${match.url}`} to={`${match.url}/list`} />
            </Switch>
        </Suspense>
    )};

export default Clients;