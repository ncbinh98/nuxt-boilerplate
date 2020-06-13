// IMPORTANT !!! WE JUST APPLY 2 LEVEL NAVIGATOR <=======================
export const navs = () => {
  return (
    [
      {
        icon: "mdi-apps",
        title: "home.welcome", //I18N key in file locales/en.json && vi.json
        to: "index",

      },
      {
        icon: "mdi-chart-bubble",
        title: "home.inspire",
        to: "inspire",
        children: [
          {
            icon: "mdi-account",
            title: "home.test",
            to: "test"
          },
        ]
      },

    ]
  )
}