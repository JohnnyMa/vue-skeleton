import Vue from 'vue'
import Router from 'vue-router'

import Vuetable from './../src/components/Vuetable.vue'
import VuetablePagination from './../src/components/VuetablePagination.vue'
import VuetablePaginationDropdown from './../src/components/VuetablePaginationDropdown.vue'
import VuetablePaginationBootstrap from './../src/components/VuetablePaginationBootstrap.vue'
// import { domain, fromNow } from './filters'
import App from './../src/components/App.vue'
import Dashboard from './../src/components/Dashboard.vue'
import Hello from './../src/components/Hello.vue'
import Grid from './../src/components/Grid.vue'
import Todo from './../src/components/Todo.vue'
import VueTableSample from './../src/components/VueTableSample.vue'

// install router
Vue.use(Router);

Vue.config.debug = true;

//enable vue-debug plugin
// var vueDebug = require('vue-debug')
// Vue.use(vueDebug)


var VueResource = require('vue-resource');
Vue.use(VueResource);

//
// secondly, require or import Vuetable and optional VuetablePagination component
//
// import Vuetable from 'vuetable';

//
// thirdly, register components to Vue
//
Vue.component('vuetable', Vuetable);
Vue.component('vuetable-pagination', VuetablePagination)
Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown)
Vue.component('vuetable-pagination-bootstrap', VuetablePaginationBootstrap)


// register filters globally
// Vue.filter('fromNow', fromNow)
// Vue.filter('domain', domain)


//var App = Vue.extend({})

var Foo = Vue.extend({
  template: '<p>This is foo!</p>'
});

var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
});

var Bar2 = Vue.extend({
  template: '<p>This is bar222!</p>'
});

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
// var App = Vue.extend({})

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new Router();

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
  'hello': {
    component: Hello
  },
  'grid': {
    component: Grid
  },
  'dashboard': {
    component: Dashboard
  },
  '/foo': {
    component: Foo
  },
  '/bar': {
    component: Bar
  },
  '/bar2': {
    component: Bar2
  },
  '/todo': {
    component: Todo
  },
  '/vueTable': {
    component: VueTableSample
  }
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');
