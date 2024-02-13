
if (/bbs.post.newer.list/.text($request.body)){
  let body = JSON.parse($response.body)
  let obj = {...body,data:[]}
  $done(JSON.stringify({
    obj
  }))
}
