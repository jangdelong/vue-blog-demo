import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import posts from './modules/posts'
import post from './modules/post'
import createLogger from 'vuex/logger'

// 告诉 vue “使用” vuex
Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  middlewares: debug ? [createLogger()] : [],

  modules: {
    counter,
    posts,
    post
  },
  strict: debug
})
