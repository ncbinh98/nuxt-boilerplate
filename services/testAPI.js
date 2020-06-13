import withQuery from 'with-query'
export const getTests = (app) => (app.$axios.get('/tests/'))