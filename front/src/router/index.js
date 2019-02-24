import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { routes } from './routes'

class RouterApp extends Component {
    render() {
        return (
            <>
                {
                    routes.map(route => (
                        <Route key={ route.name } exact path={ route.path } component={ route.component } />
                    ))
                }
            </>
        )
    }
}

export default RouterApp;