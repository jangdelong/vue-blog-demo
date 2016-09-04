<template>
  <h1 class="page-header">
    {{ title }}
  </h1>
	<div>
    <div class="post-item" v-for="post in list">
      <h2 id="glyphicons-glyphs">
        <a class="anchor-link" v-link="{ name: 'post', params: { _id: post._id } }">{{ post.title }}</a>
      </h2>
      <p>
       {{ post.content }}
      </p>
    </div>
	</div>
</template>

<script>
import store from '../../../vuex/store'
import { getList } from '../../../vuex/getters'

export default {
  data () {
    return {
      title: '文章列表'
    }
  },
  store,
  vuex: {
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      list: getList
    }
  }
}
</script>

<style scoped>
.anchorjs-link {
  font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;
}
.post-item {
  border-bottom: 1px dashed #ddd;
}
.page-header {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>