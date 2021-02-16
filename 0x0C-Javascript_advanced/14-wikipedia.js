function createElement (data) {
  const jsonExtract = JSON.parse(data.srcElement.response)
  const parr = document.createElement('p')
  const parrText = document.createTextNode(jsonExtract.query.pages['21721040'].extract)
  parr.appendChild(parrText)
  document.body.appendChild(parr)
}
function queryWikipedia (callback) {
  const req = new window.XMLHttpRequest()
  req.addEventListener('load', callback)
  req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*')
  req.send()
  return req
}
queryWikipedia(createElement)
