import { getLists } from './api';
export default {
	updateUserInfo({ commit, newVal }) {},
	async getLists({ commit }) {
		await getLists().then((res) => {
			commit('getLists', res.data);
        });
        let res = await getLists();
        commit('getLists', res.data);
	}
};
