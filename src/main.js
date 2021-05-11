import Vue from 'vue'
import App from './App.vue'
import Chakra, { CThemeProvider } from '@chakra-ui/vue'

Vue.config.productionTip = false
Vue.use(Chakra)

new Vue({
  el: '#app',
  render: (h) => h(CThemeProvider, [h(App)])
}).$mount()
