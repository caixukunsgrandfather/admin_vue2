import router from "@/router";
import store from "@/store";



router.beforeEach((to, from, next) => {

    //检查vuex有没有token
    let token = getToken();
    if (token) {
        //看vuex里有没有个人信息
        if (store.getters.avatar) {
            if (to.path == '/login') {
                next()
            } else {
                next();
            }
        } else {
            //确认token的真假
            store.dispatch('getUserInfo').then(res => {
                //拿到个人信息
                if (to.path == '/login') {
                    next('/login');
                } else {
                    next();
                }
            }).catch(error => {
                //失败
                localStorage.removeItem('token');
                store.commit('writeToken', "");
                if (to.path == '/login') {
                    next();
                } else {
                    next();
                }
                location.reload();
            })
        }
    }
    else {
        if (to.path == '/login') {
            next();
        } else {
            next('/login');
        }
    }
})




//
function getToken() {
    let token = store.state.token
    if (!token) {
        token = localStorage.getItem('token')
        if (token) {
            store.commit('writeToken', token)
        }
    }
    return token
}