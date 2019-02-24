import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { routes } from './../../router/routes'

class Navbar extends Component {
    render(){
        let navbarRoutes = routes.filter((e) => e.navbarUse === true )
        let currentRoute = this.props.location.pathname
        let routeClasses = route => {
            return currentRoute === route ?
                "active navbar-brand"
                :
                "navbar-brand"
        }

        const navbar = (
            <nav className="navbar navbar-dark bg-primary fixed-top">
                {
                    navbarRoutes.map(route => (
                        <Link key={ route.name } className={routeClasses(route.path)} to={ route.path }>
                            { route.name }
                        </Link>
                    ))
                }
            </nav>
        )

        return ( navbar )
    }
}

export default withRouter(Navbar);