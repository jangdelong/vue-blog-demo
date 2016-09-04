<template>
	<h3 class="text-center">
    <i class="glyphicon glyphicon-edit"></i>
    {{ pageTitle }}
  </h3>

  <div class="row">
    <div class="col-lg-6">
      <h4>博客标题</h4>
      <input type="text" v-model="postTitle" class="form-control" placeholder="博客标题">
    </div>
  </div>

  <div class="row">
    <div class="col-lg-10">
      <h4>博客内容</h4>
      <textarea class="form-control" v-model="postContent" rows="15" placeholder="请填写博客内容"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-10">
      <button @click="createPost(post)" class="btn btn-success col-lg-2">发布</button>
    </div>
  </div>
</template>

<script>
import store from '../../vuex/store'
import { newPost } from '../../vuex/actions'

export default {
  data () {
    return {
      pageTitle: '创建文章',
      postTitle: '',
      postContent: ''
    }
  },
  store,
  vuex: {
    actions: {
      createPost: newPost   // 取别名
    }
  },
  computed: {
    post: {
      get () {
        return {
          _id: String(new Date().getTime()),
          title: String(this.postTitle),
          content: String(this.postContent)
        }
      }
    }
  }
}
</script>

<style scoped>
.row {
  padding: 10px 0;
}
</style>