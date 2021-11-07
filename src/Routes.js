import React from 'react';
import { Switch, Route } from 'react-router-dom';



function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                Pagina Inicial
            </Route>
            <Route exact path="/config">
                Pagina Configurações
            </Route>
        </Switch>
    );
}

export default Routes;