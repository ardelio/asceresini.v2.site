import { AddRssItem } from '../react/action-creators';

export default (dispatch, feed) => {
  feed.forEach(feedItem => dispatch(AddRssItem(
    feedItem.guid,
    feedItem.title,
    feedItem.description,
    feedItem.url
  )));
};
