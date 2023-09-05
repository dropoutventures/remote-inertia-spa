import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';

import axios from 'axios';
axios.defaults.withCredentials = true;
import md5 from 'crypto-js/md5';

import route from 'ziggy-js';
const ZiggyRoutes = await fetch('https://crm.remote-inertia-spa.test/api/routes').then(x => x.json());
const ZiggyRouter = (name, params) => route(name, params, true, ZiggyRoutes);

console.log('Routes', ZiggyRoutes);

import './tailwind.css'

fetch('https://crm.remote-inertia-spa.test' + window.location.pathname + window.location.search, {
  mode: "cors",
  credentials: "include",
  headers: {
    'Content-Type': 'application/json',
    'X-Inertia': true,
    'X-Inertia-Version': md5(window.location.origin).toString(),
  }
})
  .then(response => response.json())
  .then(data => {
    console.log('Data-Page', data);
    document.getElementById("app").dataset.page = JSON.stringify(data);
    createInertiaApp({
      resolve: name => import(`./views/${name}.vue`),
      setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
          .mixin({ methods: { route: ZiggyRouter } })
          .use(plugin)
          .mount(el)
      },
    })
  });

