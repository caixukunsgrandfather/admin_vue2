import Vue from 'vue';
import VueX from 'vuex';
import { getUserInfo } from "@/api/user";

Vue.use(VueX);

export default new VueX.Store({
    state: {
        token: '',
        userInfo: {
            username: "",
            avatar: "",
            phone: "",
            email: ""
        },
    },
    getters: {
        avatar(state) {
            return state.userInfo.avatar;
            // console.log(state.userInfo.avatar);
        }
    },
    mutations: {
        writeToken(state, token) {
            state.token = token;
        },
        writeUserInfo(state, payload) {
            console.log(payload);
            state.userInfo.username = payload.username;
            state.userInfo.avatar = "https://www.chengzier.cn:8000/" + payload.avator;
            state.userInfo.phone = payload.phone;
            state.userInfo.email = payload.email;
        }
    },
    actions: {
        getUserInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(res => {
                    console.log(111);

                    if (res.data.status) {
                        reject('error');
                    } else {
                        // 将拿到的个人信息存储到state中
                        commit('writeUserInfo', res.data);
                        console.log(res.data);
                        resolve(res.data);
                    }
                }).catch(error => {
                    reject('error');
                })
            })
        }
    }
})