require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
require('@fortawesome/fontawesome-free')
require('admin-lte');



import { createApp } from "vue";
import router from "./router";
import store from "./store";

import axios from 'axios'
import VueAxios from 'vue-axios'

import Swal from 'sweetalert2'
window.Swal = Swal;

import toastr from 'toastr'
window.toastr = toastr;
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
var app = createApp({});
import CKEditor from '@ckeditor/ckeditor5-vue';

// import CkEditor from '@ckeditor/ckeditor5-vue';
app.component('top-header', require('./views/local/HeadTop.vue').default);
app.component('main-header', require('./views/local/HeadMain.vue').default);
app.component('big-footer', require('./views/local/Footer.vue').default);
app.use(store).use(router).use(CKEditor).use(toastr).use(VueAxios, axios).mount("#app");
app.use(router).use(VueAxios, axios).mount("#home");
// app.mount('#app');
