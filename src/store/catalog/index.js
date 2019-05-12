import { fetchData } from "./data";
import WebError from "../../errors/WebError";

const getters = {
    neverLoaded(state) {
        return state.neverLoaded;
    },
    loading(state) {
        return state.loading;
    },
    error(state) {
        return state.error;
    },
    loaded(state) {
        return !state.neverLoaded && !state.loading && (state.data || state.error);
    }
};

const mutations = {
    load(state) {
        state.loading = true;
    },
    success(state, catalog) {
        state.neverLoaded = false;
        state.loading = false;
        state.data = catalog;
        state.error = null;
    },
    failure(state, error) {
        state.neverLoaded = false;
        state.loading = false;
        state.data = null;
        state.error = error;
    }
};

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

const state = {
    loading: false,
    neverLoaded: true,
    data: null,
    error: null
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};