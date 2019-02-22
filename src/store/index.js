import Vue from 'vue';
import Vuex from 'vuex';

//Modules
import language from './modules/language';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    language,
  }
});

export default store;
