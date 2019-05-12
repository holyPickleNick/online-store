import { getInitialState } from "./utils";

export const mutations = {
    load(state) {
        state.loading = true;
    },
    success(state, data) {
        state.neverLoaded = false;
        state.loading = false;
        state.data = data;
        state.error = null;
    },
    failure(state, error) {
        state.neverLoaded = false;
        state.loading = false;
        state.data = null;
        state.error = error;
    },
    clear(state) {
        const initialState = getInitialState();

        Object.keys(initialState).forEach(key => {
            state[key] = initialState[key];
        });
    }
};