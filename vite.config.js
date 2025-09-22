import { fileURLToPath, URL } from 'node:url'               // these functions will handle file paths in a cross-platform enviroment
import { defineConfig } from 'vite'                         // self explanatory
import vue from '@vitejs/plugin-vue'                  // vue plugin that enables Vue support for Vite
import vueDevTools from 'vite-plugin-vue-devtools'    // plugin that enables DevTools in your project to help you debug

export default defineConfig({
    root: './src',                                      // declaring the root directory, vite will look for the index.html file inside the src folder
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
    alias: {                                                     //this is similar to the babel-root-plugin-import that defines long directories with a flag
        '@': fileURLToPath(new URL('./src', import.meta.url))      //we are creating an alias for import statements, instead of using ./src, you can use @/
    },
    },
})