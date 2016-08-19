import 'whatwg-fetch'

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export default (url, fetch=fetch) => {
  return fetch(url)
    .then(checkStatus)
    .catch(error => {
      console.error(`Request failed [${url}]:`, JSON.stringify(error));
      throw error;
    })
}
