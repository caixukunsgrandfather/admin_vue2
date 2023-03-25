import request from '@/request';
//验证码封装
export function getUserInfo(token) {
    return request({
        url: "api/superprofile",
        headers: {
            authorization: `Bearer ${token}`
        }
    })
}

//登录封装
export function login(option) {
    return request({
        url: "api/supersignin",
        method: 'POST',
        data: `username=${option.username}&password=${option.password}&uuid=${option.uuid}&text=${option.text}`
    })
}

//数据渲染封装
export function project(token) {
    return request({
        method: 'GET',
        url: "api/classify",
        headers: {
            authorization: `Bearer ${token}`
        }
    })
}

//新增数据封装
export function project1(token, data) {
    return request({
        method: 'POST',
        url: "api/classify",
        headers: {
            authorization: `Bearer ${token}`
        },
        data
    })
}

//删除封装
export function projectdel(data, token) {
    return request({
        method: 'delete',
        url: "api/classify",
        headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/x-www-form-urlencoded",
        },
        data
    })
}

//更新封装
export function GAIBIAN(data, token) {
    return request({
        method: 'put',
        url: "api/classify",
        headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/x-www-form-urlencoded",
        },
        data
    })
}