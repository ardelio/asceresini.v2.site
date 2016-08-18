import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from '../create-store'
import {
  Container,
  Hero,
  RssFeed,
  SocialRibbon
} from '../components'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <Hero title="Anthony Sceresini" punchline="This is a punchline. Say something punchy." />
      <SocialRibbon />
      <RssFeed />
    </Container>
  </Provider>,
  document.getElementById('app')
)
