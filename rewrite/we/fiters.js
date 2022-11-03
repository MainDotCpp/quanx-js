// 重写响应
const rewrite = (body) => {
    let {data: {cpUserList}} = body
    console.log(cpUserList)
    if (!cpUserList) {
        console.log("return")
        return
    }

    for (let cpUser of cpUserList) {
        cpUser.nickname = `${cpUser.nickname}_CCCCCCCCCCCCCCCC`;
    }
}
console.log(JSON.stringify($request))
console.log(JSON.stringify($task))
let {body} = JSON.parse($request.body)
rewrite(body)
$done({body})
