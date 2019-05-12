export default {
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