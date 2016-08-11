import React from 'react'
import ReactDOM from 'react-dom'

import { Container, Hero, SocialRibbon } from '../components'

ReactDOM.render(
  <Container>
    <Hero title="Anthony Sceresini" punchline="This is a punchline. Say something punchy." />
    <SocialRibbon />
  </Container>,
  document.getElementById('app')
)
