import { ADD_RSS_ITEM } from '../redux-action-types';

export default (guid, title, description, url) => ({
    rssItem: {
      guid,
      title,
      description,
      url
    },
    type: ADD_RSS_ITEM
});
