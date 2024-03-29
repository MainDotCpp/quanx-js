// 重写响应
const rewrite = (body) => {
    let {data: {cpUserList}} = body

    // 判断是否匹配接口
    if (!cpUserList) {
        return
    }

    // 修改用户名
    for (let cpUser of cpUserList) {
        cpUser.nickname = `${cpUser.nickname}_${cpUser.online === 1 ? '###' : ''}`;
    }
}
let body = JSON.parse($response.body)
try{
rewrite(body)
$done({body:JSON.stringify(body)})
}catch{
    $done({body:JSON.stringify(body)})
}
