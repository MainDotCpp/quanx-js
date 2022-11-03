// 重写响应
const rewrite = (body) => {
    let {data: {cpUserList}} = body

    // 判断是否匹配接口
    if (!cpUserList) {
        return
    }

    // 修改用户名
    for (let cpUser of cpUserList) {
        cpUser.nickname = `${cpUser.nickname}_CCCCCCCCCCCCCCCC`;
    }
}
let body = JSON.parse($response.body)
rewrite(body)
console.log(`rewrite ---> ${JSON.stringify(body)}`)
$done({body})
