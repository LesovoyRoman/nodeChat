import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <h1 style={{margin: '15px auto'}}>Home page</h1>
        )
    }
}

export default withRouter(HomePage)