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
        <div className="flex flex-col min-h-screen overflow-hidden">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        </div>
      </ParallaxProvider>
    )
  }
}

export default Template
