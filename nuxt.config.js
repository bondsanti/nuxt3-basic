// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: ['@nuxtjs/tailwindcss'],
    meta:{
        link:[
            { rel: "stylesheet",href:"https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600&display=swap"},
            { rel: "icon",type:"image/x-icon",href:"/vbeicon.icon"}
        ],
        script:[],
        meta:[],
        
    },
    css: [
        // Load a Node.js module directly (here it's a Sass file)
        //'bulma',
        // CSS file in the project
        '@/assets/css/main.css',
        // SCSS file in the project
        //'@/assets/css/main.scss'
      ]
})
