import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { parseString } from 'xml2js';

chai.use(chaiAsPromised);
chai.use(sinonChai);

const proxyquireStrict = proxyquire.noCallThru();
const getUrl = sinon.stub();
const getFeed = proxyquireStrict('../../app/react/lib/get-feed', {
  './get-url': getUrl
}).default

describe('getFeed', () => {
  it('converts the response body to a JS object', () => {
    const response = {
      text: () => new Promise(resolve => resolve(XML))
    };
    getUrl.returns(new Promise(resolve => resolve(response)));
    return new Promise(resolve => {
      parseString(XML, (err, result) => resolve(result))
    }).then(result => {
      return Promise.all([
        expect(getFeed('http://test.com')).to.eventually.deep.equal(result),
        expect(getUrl).to.have.been.calledWith('http://test.com')
      ]);
    })
  });

  it('throws an error', () => {
    const response = {
      text: () => new Promise(resolve => resolve('Must break xml2js'))
    };
    getUrl.returns(new Promise(resolve => resolve(response)));
    return Promise.all([
      expect(getFeed('http://test.com'))
        .to.eventually.be.rejectedWith('Error: Non-whitespace before first tag.\nLine: 0\nColumn: 1\nChar: M'),
      expect(getUrl).to.have.been.calledWith('http://test.com')
    ]);
  })
})

const XML = `
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:cc="http://cyber.law.harvard.edu/rss/creativeCommonsRssModule.html" version="2.0">
<channel>
<item>
<title>
<![CDATA[ Some Blog Title ]]>
</title>
<description>
<![CDATA[
<div>Some blog description</div>
]]>
</description>
<link>
https://test.com
</link>
<guid isPermaLink="false">https://test.com/p/413362cf5c7c</guid>
<dc:creator>
<![CDATA[ A Cool Dude ]]>
</dc:creator>
<pubDate>Wed, 17 Aug 2016 11:02:10 GMT</pubDate>
</item>
</channel>
</rss>
`
