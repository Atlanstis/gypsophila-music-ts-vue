import Vue from "vue";
import Vuex from "vuex";
import { UserState } from "./modules/user";

Vue.use(Vuex);

export interface RootSstate {
  user: UserState;
}

export default new Vuex.Store({});
