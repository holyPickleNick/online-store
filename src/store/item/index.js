import getters from "../getters";
import { mutations } from "../mutations";
import { fetchData, updateData } from "../catalog/data";
import WebError from "../../errors/WebError";
import { getInitialState } from "../utils";

const fetchState = getInitialState();
const purchaseState = getInitialState();

const fetchActions = {
    async load(store, id) {
        store.commit('load');

        try {
            const results = await fetchData(id);

            store.commit('success', results);
        } catch (error) {
            const payload = { message: error.message };

            if (error instanceof WebError) {
                payload.statusCode = error.statusCode;   
            }

            store.commit('failure', payload);
        }
    }
};

const purchaseActions = {
    async purchase(store, id) {
        store.commit('load');

        try {
            const results = await updateData(id, found => found.available = false);

            store.commit('success', results);
        } catch (error) {
            const payload = { message: error.message };

            if (error instanceof WebError) {
                payload.statusCode = error.statusCode;   
            }

            store.commit('failure', payload);
        }
    }
};

export default {
    namespaced: true,
    state: fetchState,
    getters,
    mutations,
    actions: fetchActions,
    modules: {
        purchase: {
            namespaced: true,
            state: purchaseState,
            getters,
            mutations,
            actions: purchaseActions
        }
    }
}