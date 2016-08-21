import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from '../create-store'
import dispatchFeed from '../../lib/dispatch-feed'
import {
  Container,
  Hero,
  RssFeed,
  SocialRibbon
} from '../components'

import parseMediumFeed from '../../lib/parse-medium-feed'

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

parseMediumFeed('https://9mopb3xdok.execute-api.ap-southeast-2.amazonaws.com/prod/medium')
  .then(feed => dispatchFeed(store.dispatch, feed));
