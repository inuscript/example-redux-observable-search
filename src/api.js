import fetchJsonp from 'fetch-jsonp'
import qs from 'querystring'

export const searchApi = (word) => {
  const baseURL = "https://ja.wikipedia.org/w/api.php"
  const params = {
    action: "opensearch",
    format: "json",
    search: word
  }
  const url = `${baseURL}?${qs.stringify(params)}`
  return fetchJsonp(url)
    .then( response => response.json() )
    .then( json => json[1])
}

// eslint-disable-next-line
const parseJson = (json) => {
  return json[1].map( (_, i) => {
    return {
      name: json[1][i],
      description: json[2][i],
      url: json[3][i]
    }
  })
}