
console.log($request)
console.log(JSON.stringify($response))
if (/bbs.post.newer.list/.test($request.body)){
  let body = JSON.parse($response.body)
  let obj = {...body,data:[]}
  $done(JSON.stringify({
    obj
  }))
}
