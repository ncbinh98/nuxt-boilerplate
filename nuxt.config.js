import colors from "vuetify/es5/util/colors";
import { mergeJsonFile } from "./utils/mergeJsonLocale.js";
import en from "vuetify/es5/locale/en";
import vi from "./locales/vuetify-locale/vi/vi";
export default {
    mode: "spa",
    /*
     ** Headers of the page
     */
    head: {
        // titleTemplate: "%s - " + process.env.npm_package_name,
        // title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "~/plugins/axios",
        "~/plugins/core-component_noSSR"
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ["@nuxtjs/vuetify"],
    /*
     ** Nuxt.js modules
     */
    modules: [
        "@nuxtjs/axios",
        "bootstrap-vue/nuxt",
        [
            "nuxt-i18n",
            {
                seo: false,
                locales: [
                    { code: "en", iso: "en" },
                    { code: "vi", iso: "vi" }
                ],
                defaultLocale: "en",
                vueI18n: {
                    fallbackLocale: "en",
                    messages: {
                        en: mergeJsonFile("./locales/en", __dirname),
                        vi: mergeJsonFile("./locales/vi", __dirname)
                    }
                }
            }
        ]
    ],
    axios: {
        baseURL: process.env.BASE_URL
    },
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        },
        lang: {
            locales: { en, vi },
            current: "en"
        }
    },


    /*process.env.YOGA_ENDPOINT_PRODUCT
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) { }
    }
};
