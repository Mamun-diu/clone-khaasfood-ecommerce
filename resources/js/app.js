require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
require('@fortawesome/fontawesome-free')
require('admin-lte');

// Require Vue
// import Vue from "vue";

// window.Vue = require('vue');

// // Register Vue Components
// Vue.component('example-component', require('./components/ExampleComponents.vue').default);

// // Initialize Vue
// const app = new Vue({
//     el: '#app',
// });

// import { createApp } from 'vue';

// let app=createApp({})
// app.component('example-component', require('./components/ExampleComponents.vue').default);
// app.mount("#app")

import { createApp } from "vue";
import router from "./router";
import store from "./store";

import axios from 'axios'
import VueAxios from 'vue-axios'
var app = createApp({});
// app.component('example-component', require('./components/ExampleComponents.vue').default);
app.use(store).use(router).use(VueAxios, axios).mount("#app");
// app.mount('#app');
