<template>
  <h1 class="page-header" class="text-center">
    {{ post.title }}
  </h1>
	<div>
    <p>{{ post.content }}</p>
	</div>
</template>

<script>
import store from '../../../vuex/store'
import { getList } from '../../../vuex/getters'

export default {
  data () {
    return {
      title: '文章'
    }
  },
  store,
  vuex: {
    getters: {
      // 这个 post 是从 post.js 那个 store 里面取得
      // 本来这个想用来做异步调用的
      // post: getPost,
      list: getList
    }
  },
  // 钩子函数，该组件实例创建之后调用
  computed: {
    // 这个 post 是从 posts.js 那个 store 的数据列表中取得
    post: {
      get () {
        let id = this.$route.params._id

        return this.list.filter(post => {
          return post._id === id
        })[0]
      }
    }
  }
}
</script>

<style scoped>
.text-center {
  text-algin: center
}
</style>