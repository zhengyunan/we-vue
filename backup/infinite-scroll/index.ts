import InfiniteScroll from './directive'
import Vue from 'vue'

const install = Vue => {
  Vue.directive('InfiniteScroll', InfiniteScroll)
}

/* istanbul ignore next */
if (!Vue.prototype.$isServer && window.Vue) {
  Vue.use(install)
}

InfiniteScroll.install = install

export default InfiniteScroll
