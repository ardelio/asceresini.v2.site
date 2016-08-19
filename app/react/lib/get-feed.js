import { parseString } from 'xml2js';
import getUrl from './get-url';


const parseXmltoJs = response => {
  return response.text()
    .then(body => {
      return new Promise((resolve, reject) => {
        parseString(body, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        })
      });
    });
};

export default url => {
  return getUrl(url)
    .then(parseXmltoJs);
};
