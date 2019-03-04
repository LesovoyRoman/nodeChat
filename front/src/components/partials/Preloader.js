import React, { Component } from 'react'
import preloaderImg from './../../images/preloader.gif'

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
    width: '100%',
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