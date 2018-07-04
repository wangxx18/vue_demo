import vue from 'vue';
import vuex from 'vuex';
import state from './state.js';

vue.use(vuex);

export default new vuex.Store({
    state,
});
