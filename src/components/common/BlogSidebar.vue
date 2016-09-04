<template>
  <div class="col-md-3" id="sidebar">
    <h3><span class="glyphicon glyphicon-list-alt"></span> {{ sideTitle }}</h3>
    <ul class="side-list">
      <li v-for="(index, post) in list" v-if="$index <= 2 "><a href="javascript: void(0);" data-id="{{ post._id }}" @click="linkGo">{{ post.title }}</a></li>
    </ul>

    <div>
      <h3>Count is {{ counterValue || 0 }}</h3>
    </div>
    <div>
      <button @click="increment">Increment + 1</button>
    </div>
  </div>
</template>

<script>
import store from '../../vuex/store'
import { incrementCounter } from '../../vuex/actions'
import { getCount, getReverseList } from '../../vuex/getters'

export default {
  data () {
    return {
      sideTitle: '最新文章'
    }
  },
  store, // 在根组件加入 store ，让它的子组件和 store 连接
  vuex: {
    actions: {
      increment: incrementCounter
    },
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      counterValue: getCount,
      list: getReverseList
    }
  },
  methods: {
    linkGo (e) {
      e.preventDefault()
      const target = e.target
      this.$router.go({ name: 'post', params: { _id: target.dataset.id } })
    }
  }
}
</script>

<style scoped>
#sidebar {
  min-height: 400px;
}
.side-list {
  padding-left: 10px;
  line-height: 2em;
  list-style-type: none;
}
</style>