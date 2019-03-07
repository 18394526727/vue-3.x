import Vue from 'vue';
import Vuex from 'vuex';
/*store依赖*/
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
/*vuex状态持久化*/
import createPersistedState from 'vuex-persistedstate'
let state = {
	//用户信息
	user_info: {},
	//用户常用地址
	address_list: {},
	lists:[]
};
Vue.use(Vuex);
export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations,
	modules: {},
	plugins: [createPersistedState()]
});
