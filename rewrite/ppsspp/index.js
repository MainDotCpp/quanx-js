let body = JSON.parse($request.body)

body.data.state = 2
$done({body:JSON.stringify(body)})

