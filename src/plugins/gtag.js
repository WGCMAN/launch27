import Vue from "vue";
import VueGtag from "vue-gtag";

import router from '../routes'

Vue.use(VueGtag, {
    config: {id: process.env.VUE_APP_GOOGLE_ANALYTICS},
    bootstrap: false
});
