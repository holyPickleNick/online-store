import { fetchData } from "./data";
import WebError from "../../errors/WebError";
import getters from "../getters";
import { mutations } from "../mutations";
import { getInitialState } from "../utils";

const state = getInitialState();

const actions = {
    async load(store) {
        store.commit('load');

        try {
            const results = await fetchData();

            store.commit('success', results);
        } catch (error) {
            const payload = { message: error.message };

            if (error instanceof WebError) {
                payload.statusCode = error.statusCode;   
            }

            store.commit('failure', payload);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};