import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ParallaxProvider>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ParallaxProvider>
    )
  }
}

export default Template
