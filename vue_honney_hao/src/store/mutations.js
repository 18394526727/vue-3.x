import { SET_ADDRESS, UPDATE_USERINFO ,getLists} from './mutation-type';

export default {
	//更新仓库地址
	[SET_ADDRESS](state, newVal) {
		state.address_list = newVal;
		localStorage.setItem('address_list', JSON.stringify(newVal));
	},

	//更新仓库用户信息
	[UPDATE_USERINFO](state, newVal) {
		state.user_info = newVal;
		localStorage.setItem('user_info', JSON.stringify(newVal));
	},

	[getLists](state,newVal){
		state.lists = newVal;
	}
};
