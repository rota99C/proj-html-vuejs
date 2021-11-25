import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
//BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  render: h => h(App),
}).$mount('#app')
