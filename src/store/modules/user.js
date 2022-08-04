
import { TOKEN_NAME } from '@/config/global';

const InitUserInfo = {
    roles: [],
};

// 定义的state初始值
const state = {
    token: localStorage.getItem(TOKEN_NAME) || '', // 默认token不走权限
    userInfo: InitUserInfo,
};

const mutations = {
    setToken (state, token) {
        localStorage.setItem(TOKEN_NAME, token);
        state.token = token;
    },
    removeToken (state) {
        localStorage.removeItem(TOKEN_NAME);
        state.token = '';
    },
    setUserInfo (state, userInfo) {
        state.userInfo = userInfo;
    },
};

const getters = {
    token: (state) => state.token,
    roles: (state) => state.userInfo?.roles,
};

const actions = {
    async login ({ commit }, userInfo) {
        const mockLogin = async (userInfo) => {
            // 登录请求流程
            console.log(userInfo);
            return {
                code: 200,
                message: '登陆成功',
                data: 'main_token',
            };
        };

        const res = await mockLogin(userInfo);
        if (res.code === 200) {
            commit('setToken', res.data);
        } else {
            throw res;
        }
    },
    async getUserInfo ({ commit, state }) {
        const mockRemoteUserInfo = async (token) => {
            if (token === 'main_token') {
                return {
                    name: 'td_main',
                    roles: ['ALL_ROUTERS'],
                };
            }
            return {
                name: 'td_dev',
                roles: ['UserIndex', 'DashboardBase', 'login'],
            };
        };

        const res = await mockRemoteUserInfo(state.token);

        commit('setUserInfo', res);
    },
    async logout ({ commit }) {
        commit('removeToken');
        commit('setUserInfo', InitUserInfo);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
