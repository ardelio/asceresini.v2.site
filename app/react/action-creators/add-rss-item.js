import { ADD_RSS_ITEM } from '../redux-action-types';

export default (guid, title, description) => ({
    rssItem: {
      guid,
      title,
      description
    },
    type: ADD_RSS_ITEM
});
