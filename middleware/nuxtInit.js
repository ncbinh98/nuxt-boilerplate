export default ({ app, store, $axios }) => {
  if (app.context.route.fullPath.includes("/vi")) {
    // $axios.setHeader('aha', '123')
    store.dispatch("changeLocale", "vi")
  }
}
