import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import dispatchFeed from '../../app/lib/dispatch-feed'

chai.use(chaiAsPromised);
chai.use(sinonChai);

describe('dispatchFeed', () => {
  it('dispatch is called for each item in the feed', () => {
    const dispatch = sinon.spy();
    const feed = [
      {
        guid: 1,
        title: 'title',
        description: 'description'
      },
      {
        guid: 2,
        title: 'title',
        description: 'description'
      }
    ];

    dispatchFeed(dispatch, feed);
    return expect(dispatch.calledTwice).to.equal(true);
  });

  it('dispatch is called with the AddRssItem Action Creator', () => {
    const dispatch = sinon.spy();
    const feed = [
      {
        guid: 1,
        title: 'title',
        description: 'description'
      }
    ];
    const expectedAction = {
      rssItem: {
        description: "description",
        guid: 1,
        title: "title"
      },
      type: "ADD_RSS_ITEM"
    };

    dispatchFeed(dispatch, feed);
    return expect(dispatch.firstCall).to.have.been.calledWith(expectedAction);
  });
});
