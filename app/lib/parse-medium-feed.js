import _ from 'lodash';
import getFeed from './get-feed';

const constructFeedObject = raw => {
  const items = _.get(raw, 'rss.channel[0].item', []);
  return items.reduce((acc, item) => {
    try {
      const guid = _.get(item, 'guid[0]["_"]', '');
      const title = _.get(item, 'title[0]', '').split(/\s/).filter(Boolean).join(' ');
      const description = _.get(item, 'description[0]', '').split('\n').filter(Boolean)[0];
      const url = _.get(item, 'link[0]', '').split('\n').filter(Boolean)[0]

      if (guid && title && description && url) {
        acc.push({ guid, title, description, url });
      }
    } catch (e) {
      console.error(`Malformed RSS item. ${e}`)
    } finally {
      return acc;
    }
  }, []);
};

export default url => {
  return getFeed(url)
    .then(constructFeedObject)
};
