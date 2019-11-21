import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomeContainer from "./HomeContainer";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={pageData => <HomeContainer data={pageData}/>}/>
            <Route exact path="/:xxx" render={pageData => <HomeContainer data={pageData}/>}/>

            <Route render={() => <div  style={{display: 'flex', justifyContent: 'center'}}>Error Page 404</div>}/>
        </Switch>
    );
};

export default Routes;
