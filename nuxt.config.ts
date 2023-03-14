// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        apiProtocol: "https",
        apiHostname: "susapi.emilioaliustic.repl.co",
        foodEndpoint: "/run",
        imageEndpoint: "/Misc/schoolFoodImage"
    },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image-edge",
        "nuxt-icon"
    ],
    dir: {
        public: "static",
        pages: "routes"
    },
    vite: {
        server: {
            hmr: {
                protocol: "wss"
            }
        }
    }
});