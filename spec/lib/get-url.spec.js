import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import getUrl from '../../app/react/lib/get-url';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('getUrl', () => {
  let consoleError = null;

  before(() => {
    consoleError = console.error;
    console.error = () => {};
  });

  after(() => {
    console.error = consoleError;
  });

  [
    {
      response: { status: 200, body: 'the body'},
      url: 'http://example.com'
    },
    {
      response: { status: 201, body: 'the body'},
      url: 'http://example.com'
    }
  ].forEach(testCase => {
    it(`returns the response when response status is ${testCase.response.status}`, () => {
      const fetch = sinon.stub();

      fetch.returns(new Promise(resolve => resolve(testCase.response)));

      return Promise.all([
        expect(getUrl(testCase.url, fetch)).to.eventually.equal(testCase.response),
        expect(fetch).to.have.been.calledWith(testCase.url)
      ]);
    });
  });

  [
    {
      response: { status: 400, statusText: 'Bad Request'},
      url: 'http://example.com'
    },
    {
      response: { status: 500, statusText: 'Internal Server Error'},
      url: 'http://example.com'
    }
  ].forEach(testCase => {
    it(`returns an error when response status is ${testCase.response.status}`, () => {
      const fetch = sinon.stub();

      fetch.returns(new Promise(resolve => resolve(testCase.response)));

      return Promise.all([
        expect(getUrl(testCase.url, fetch))
          .to.eventually.be.rejectedWith(`Error: ${testCase.response.statusText}`),
        expect(fetch).to.have.been.calledWith(testCase.url)
      ]);
    });
  });
});
