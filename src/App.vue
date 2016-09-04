<template>
  <div id="app">
    <blog-header></blog-header>
    <div class="container" id="content">
      <div class="col-md-9" id="main">
        <router-view></router-view>
      </div>
      <blog-sidebar></blog-sidebar>
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import BlogHeader from './components/common/BlogHeader'
import BlogFooter from './components/common/BlogFooter'
import BlogSidebar from './components/common/BlogSidebar'

export default {
  components: {
    BlogHeader,
    BlogFooter,
    BlogSidebar
  }
}
</script>

<style>

</style>
