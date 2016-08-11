import React, { Component } from 'react'
import { SocialIcon } from '../components'

class SocialRibbon extends Component {
  render() {
    return (
      <div id="social-ribbon-component" className="grid justify-content -around">
        <div className="cell -1of12">
        <SocialIcon
        alt="Github"
        src="github.svg"
        url="https://github.com/asceresini" />
        </div>
        <div className="cell -1of12">
          <SocialIcon
            alt="Twitter"
            src="twitter.svg"
            url="https://twitter.com/asceresini" />
        </div>
        <div className="cell -1of12">
          <SocialIcon
            alt="Linkedin"
            src="linkedin.svg"
            url="http://au.linkedin.com/in/asceresini/" />
        </div>
        <div className="cell -1of12">
          <SocialIcon
            alt="Facebook"
            src="facebook.svg"
            url="https://www.facebook.com/ardelio" />
        </div>
      </div>
    )
  }
}

SocialRibbon.propTypes = {}

export default SocialRibbon
