export const fetchMutations = {
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
    }
};