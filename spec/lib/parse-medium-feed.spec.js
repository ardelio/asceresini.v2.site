import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(chaiAsPromised);
chai.use(sinonChai);

const proxyquireStrict = proxyquire.noCallThru();
const getFeed = sinon.stub();
const parseMediumFeed = proxyquireStrict('../../app/lib/parse-medium-feed', {
  './get-feed': getFeed
}).default

describe('parseMediumFeed', () => {
  it('returns a correctly formatted feed object', () => {
    getFeed.returns(new Promise(resolve => resolve(ExpectedRssObject)));
    return Promise.all([
      expect(parseMediumFeed('http://test.com')).to.eventually.deep.equal([
        {
          guid: "https:\/\/medium.com\/p\/413362cf5c7c",
          title: 'Useful AWS Resources',
          description: "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https:\/\/medium.com\/@ardelio\/useful-aws-resources-413362cf5c7c?source=rss-b4b1564c1f5b------2\"><img src=\"https:\/\/d262ilb51hltx0.cloudfront.net\/max\/681\/1*Ccu_mmYj5wAATAWUZuqqew.png\" width=\"681\"><\/a><\/p><p class=\"medium-feed-snippet\">I recently attended a bespoke training course run by AWS for Architecting on AWS. I wanted to share some of the learnings, particular in&#x2026;<\/p><p class=\"medium-feed-link\"><a href=\"https:\/\/medium.com\/@ardelio\/useful-aws-resources-413362cf5c7c?source=rss-b4b1564c1f5b------2\">Continue reading on Medium \u00bb<\/a><\/p><\/div>",
          url: "https:\/\/medium.com\/@ardelio\/useful-aws-resources-413362cf5c7c?source=rss-b4b1564c1f5b------2"
        },
        {
          guid: "https:\/\/medium.com\/p\/64ea08242413",
          title: 'Mitigating a compromised AWS account',
          description: "<div class=\"medium-feed-item\"><p class=\"medium-feed-snippet\">My wife contacted me whilst shopping to ask why the credit card was declining. At first I thought it was a terminal\/card problem (most&#x2026;<\/p><p class=\"medium-feed-link\"><a href=\"https:\/\/medium.com\/@ardelio\/mitigating-a-compromised-aws-account-64ea08242413?source=rss-b4b1564c1f5b------2\">Continue reading on Medium \u00bb<\/a><\/p><\/div>",
          url: "https:\/\/medium.com\/@ardelio\/mitigating-a-compromised-aws-account-64ea08242413?source=rss-b4b1564c1f5b------2"
        }
      ]),
      expect(getFeed).to.have.been.calledWith('http://test.com')
    ]);
  });

  it('skips malformed rss feed objects', () => {
    getFeed.returns(new Promise(resolve => resolve(UnexpectedRssObject)));
    return Promise.all([
      expect(parseMediumFeed('http://test.com')).to.eventually.deep.equal([
        {
          guid: "https:\/\/medium.com\/p\/64ea08242413",
          title: 'Mitigating a compromised AWS account',
          description: "<div class=\"medium-feed-item\"><p class=\"medium-feed-snippet\">My wife contacted me whilst shopping to ask why the credit card was declining. At first I thought it was a terminal\/card problem (most&#x2026;<\/p><p class=\"medium-feed-link\"><a href=\"https:\/\/medium.com\/@ardelio\/mitigating-a-compromised-aws-account-64ea08242413?source=rss-b4b1564c1f5b------2\">Continue reading on Medium \u00bb<\/a><\/p><\/div>",
          url: "https:\/\/medium.com\/@ardelio\/mitigating-a-compromised-aws-account-64ea08242413?source=rss-b4b1564c1f5b------2"
        }
      ]),
      expect(getFeed).to.have.been.calledWith('http://test.com')
    ]);
  });
});

const ExpectedRssObject = {
  "rss": {
    "$": {
      "xmlns:dc": "http:\/\/purl.org\/dc\/elements\/1.1\/",
      "xmlns:content": "http:\/\/purl.org\/rss\/1.0\/modules\/content\/",
      "xmlns:atom": "http:\/\/www.w3.org\/2005\/Atom",
      "xmlns:cc": "http:\/\/cyber.law.harvard.edu\/rss\/creativeCommonsRssModule.html",
      "version": "2.0"
    },
    "channel": [
      {
        "title": [
          "..."
        ],
        "description": [
          "..."
        ],
        "link": [
          "..."
        ],
        "image": [
          "..."
        ],
        "generator": [
          "Medium"
        ],
        "lastBuildDate": [
          "Wed, 17 Aug 2016 13:14:47 GMT"
        ],
        "atom:link": [
          {
            "$": {
              "href": "https:\/\/medium.com\/feed\/@ardelio",
              "rel": "self",
              "type": "application\/rss+xml"
            }
          },
          {
            "$": {
              "href": "http:\/\/medium.superfeedr.com",
              "rel": "hub"
            }
          }
        ],
        "webMaster": [
          "..."
        ],
        "item": [
          {
            "title": [
              "\n Useful AWS Resources \n"
            ],
            "description": [
              "\n\n<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https:\/\/medium.com\/@ardelio\/useful-aws-resources-413362cf5c7c?source=rss-b4b1564c1f5b------2\"><img src=\"https:\/\/d262ilb51hltx0.cloudfront.net\/max\/681\/1*Ccu_mmYj5wAATAWUZuqqew.png\" width=\"681\"><\/a><\/p><p class=\"medium-feed-snippet\">I recently attended a bespoke training course run by AWS for Architecting on AWS. I wanted to share some of the learnings, particular in&#x2026;<\/p><p class=\"medium-feed-link\"><a href=\"https:\/\/medium.com\/@ardelio\/useful-aws-resources-413362cf5c7c?source=rss-b4b1564c1f5b------2\">Continue reading on Medium \u00bb<\/a><\/p><\/div>\n\n"
            ],
            "link": [
              "\nhttps:\/\/medium.com\/@ardelio\/useful-aws-resources-413362cf5c7c?source=rss-b4b1564c1f5b------2\n"
            ],
            "guid": [
              {
                "_": "https:\/\/medium.com\/p\/413362cf5c7c",
                "$": {
                  "isPermaLink": "false"
                }
              }
            ],
            "dc:creator": [
              "\n Anthony Sceresini \n"
            ],
            "pubDate": [
              "Wed, 17 Aug 2016 11:02:10 GMT"
            ]
          },
          {
            "title": [
              "\n Mitigating a compromised AWS account \n"
            ],
            "description": [
              "\n\n<div class=\"medium-feed-item\"><p class=\"medium-feed-snippet\">My wife contacted me whilst shopping to ask why the credit card was declining. At first I thought it was a terminal\/card problem (most&#x2026;<\/p><p class=\"medium-feed-link\"><a href=\"https:\/\/medium.com\/@ardelio\/mitigating-a-compromised-aws-account-64ea08242413?source=rss-b4b1564c1f5b------2\">Continue reading on Medium \u00bb<\/a><\/p><\/div>\n\n"
            ],
            "link": [
              "\nhttps:\/\/medium.com\/@ardelio\/mitigating-a-compromised-aws-account-64ea08242413?source=rss-b4b1564c1f5b------2\n"
            ],
            "guid": [
              {
                "_": "https:\/\/medium.com\/p\/64ea08242413",
                "$": {
                  "isPermaLink": "false"
                }
              }
            ],
            "dc:creator": [
              "\n Anthony Sceresini \n"
            ],
            "pubDate": [
              "Sat, 12 Mar 2016 10:00:30 GMT"
            ]
          }
        ]
      }
    ]
  }
}

const UnexpectedRssObject = {
  "rss": {
    "$": {
      "xmlns:dc": "http:\/\/purl.org\/dc\/elements\/1.1\/",
      "xmlns:content": "http:\/\/purl.org\/rss\/1.0\/modules\/content\/",
      "xmlns:atom": "http:\/\/www.w3.org\/2005\/Atom",
      "xmlns:cc": "http:\/\/cyber.law.harvard.edu\/rss\/creativeCommonsRssModule.html",
      "version": "2.0"
    },
    "channel": [
      {
        "title": [
          "..."
        ],
        "description": [
          "..."
        ],
        "link": [
          "..."
        ],
        "image": [
          "..."
        ],
        "generator": [
          "Medium"
        ],
        "lastBuildDate": [
          "Wed, 17 Aug 2016 13:14:47 GMT"
        ],
        "atom:link": [
          {
            "$": {
              "href": "https:\/\/medium.com\/feed\/@ardelio",
              "rel": "self",
              "type": "application\/rss+xml"
            }
          },
          {
            "$": {
              "href": "http:\/\/medium.superfeedr.com",
              "rel": "hub"
            }
          }
        ],
        "webMaster": [
          "..."
        ],
        "item": [
          {
            "title": [
              "\n Useful AWS Resources \n"
            ],
            "description": [
              "\n\n<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https:\/\/medium.com\/@ardelio\/useful-aws-resources-413362cf5c7c?source=rss-b4b1564c1f5b------2\"><img src=\"https:\/\/d262ilb51hltx0.cloudfront.net\/max\/681\/1*Ccu_mmYj5wAATAWUZuqqew.png\" width=\"681\"><\/a><\/p><p class=\"medium-feed-snippet\">I recently attended a bespoke training course run by AWS for Architecting on AWS. I wanted to share some of the learnings, particular in&#x2026;<\/p><p class=\"medium-feed-link\"><a href=\"https:\/\/medium.com\/@ardelio\/useful-aws-resources-413362cf5c7c?source=rss-b4b1564c1f5b------2\">Continue reading on Medium \u00bb<\/a><\/p><\/div>\n\n"
            ],
            "guid": [
              {
                "_": "https:\/\/medium.com\/p\/413362cf5c7c",
                "$": {
                  "isPermaLink": "false"
                }
              }
            ],
            "dc:creator": [
              "\n Anthony Sceresini \n"
            ],
            "pubDate": [
              "Wed, 17 Aug 2016 11:02:10 GMT"
            ]
          },
          {
            "title": [
              "\n Mitigating a compromised AWS account \n"
            ],
            "description": [
              "\n\n<div class=\"medium-feed-item\"><p class=\"medium-feed-snippet\">My wife contacted me whilst shopping to ask why the credit card was declining. At first I thought it was a terminal\/card problem (most&#x2026;<\/p><p class=\"medium-feed-link\"><a href=\"https:\/\/medium.com\/@ardelio\/mitigating-a-compromised-aws-account-64ea08242413?source=rss-b4b1564c1f5b------2\">Continue reading on Medium \u00bb<\/a><\/p><\/div>\n\n"
            ],
            "link": [
              "\nhttps:\/\/medium.com\/@ardelio\/mitigating-a-compromised-aws-account-64ea08242413?source=rss-b4b1564c1f5b------2\n"
            ],
            "guid": [
              {
                "_": "https:\/\/medium.com\/p\/64ea08242413",
                "$": {
                  "isPermaLink": "false"
                }
              }
            ],
            "dc:creator": [
              "\n Anthony Sceresini \n"
            ],
            "pubDate": [
              "Sat, 12 Mar 2016 10:00:30 GMT"
            ]
          }
        ]
      }
    ]
  }
}
