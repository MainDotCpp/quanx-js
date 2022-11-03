// 重写响应
const rewrite = (body) => {
    let {data: {cpUserList}} = body
    if (cpUserList == null) {
        return
    }
    for (let cpUser of cpUserList) {
        cpUser.nickname = `${cpUser.nickname}_CCCCCCCCCCCCCCCC`;
    }
}

let {body} = JSON.parse($request)
rewrite(body)
$done({body})
