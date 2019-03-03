import React, { Component } from 'react'
import preloaderImg from './../../images/Rolling-1s-60px.svg'

const stylesBg = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    zIndex: -1
}

const stylesPreloader = {
    width: '50px',
    height: '50px',
}

class Preloader extends Component {
    render() {
        return (
            <div className="preloaderBg" style={stylesBg}>
                <img src={preloaderImg} style={stylesPreloader} alt={'Image loader'}/>
            </div>
        )
    }
}

export default Preloader