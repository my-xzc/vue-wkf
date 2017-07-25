import Vue from 'Vue';
import VueRouter from "vue-router";
import App from './App.vue';
import configRouter from './router';
import services from './services/dataServices';
import statics from './services/dataStatic';
import utils from './utils/utils';
import store from "./vuex/store";
import cache from "./vuex/cache";
import bus from "./vuex/bus";
import "./vuex/proto";
import authorize from './platform/authorize';
authorize();
import MintUI from 'mint-ui';
Vue.use(MintUI);
Vue.use(VueRouter);
Vue.config.debug = true;
Vue.prototype.$services = services;
Vue.prototype.$statics = statics;
Vue.prototype.$store = store;
Vue.prototype.$bus = bus;
Vue.prototype.$utils = utils;
Vue.prototype.$cache = cache;
const router = new VueRouter({
    // mode: 'history',
    saveScrollPosition: true,
    transitionOnLoad: true,
    routes: configRouter.routes
});
router.beforeEach(({ meta, path }, from, next) => {
    var { auth = true } = meta;
    var origin = window.location.origin;
    
    // Vue.user = JSON.parse(services.getCookie('user'));
    // var isLogin = Boolean(Vue.user);
    if(path !== '/login') {
        localStorage.setItem('page', path);
    } else {
        // localStorage.setItem('page', "/login");
    }
    console.log()
    var isLogin;
    services.getUser(function(res){
        isLogin = true;
        services.setCookie('user', JSON.stringify(res.results[0]));
        if (JSON.stringify(localStorage.getItem('lastDoTime')) && path == '/accquery') {
            console.log(JSON.stringify(localStorage.getItem('lastDoTime')), path,store.state.showPwdbox);
            store.commit("setShowState",true);
        } else { 
            localStorage.setItem('lastDoTime', new Date().getTime());
        }
    }, function(){
        isLogin = false; 
        if (path!='/login'){ 
            window.location.href = origin + '/hxkf/authorize';
            }
        });
        console.info('isLogin:', isLogin);
        if (auth && !isLogin && path != '/login') {
            alert('next');
        return next({ path: '/login' })
    }
    next();
});
router.afterEach(function(route) {
	if (route.name) {
		document.title = route.name;
	}
});
const app = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});