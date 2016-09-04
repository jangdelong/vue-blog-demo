<template>
	<nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button id="navBarToggle" v-on:click.stop="toggleNavBar" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- 博客标题 -->
        <a class="navbar-brand" v-link="{ path: '/' }">{{ title }}</a>
      </div>


      <div id="navbarCollapse" class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <!-- 导航 -->
        <ul class="nav navbar-nav">

          <li v-link="{ path: '/home', activeClass: 'active' }"><a v-link="{ path: '/home' }"><span class="glyphicon glyphicon-home"></span> 首页</a></li>
          <li v-link="{ path: '/lab', activeClass: 'active' }"><a v-link="{ path: '/lab' }"><span class="glyphicon glyphicon-cog"></span> 实验室</a></li>
          <li v-link="{ path: '/about', activeClass: 'active' }"><a v-link="{ path: '/about' }"><span class="glyphicon glyphicon-user"></span> 关于</a></li>
          <li v-link="{ path: '/comment', activeClass: 'active' }"><a v-link="{ path: '/comment' }"><span class="glyphicon glyphicon-comment"></span> 留言</a></a></li>

        </ul>


        <!-- 搜索 -->
        <!--
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="搜索文章">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
        </form>
        -->

        <ul class="nav navbar-nav navbar-right">
          <li v-link="{ path: '/new', activeClass: 'active' }"><a v-link="{ path: '/new' }"><span class="glyphicon glyphicon-plus"></span> 创建文章</a></li>
          <dropdown>
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">社交 <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">新浪微博</a></li>
              <li><a href="#">腾讯微博</a></li>
              <li><a href="#">FaceBook</a></li>
              <li role="separator" class="divider"></li>
              <li>
                <a v-on:click="openWechatQRModal" href="#">微信</a>
              </li>
            </ul>
          </dropdown>
        </ul>
      </div>
    </div>
  </nav>
  <div id="popup" class="popup" v-on:click.stop="closeWechatQRModal">
    <img src="../../../static/img/wechat_undefined.png" alt="微信" >
  </div>
</template>

<script>
import Dropdown from '../custom/Dropdown'
export default {
  data () {
    return {
      title: '前端博客'
    }
  },
  components: {
    Dropdown
  },
  methods: {
    openWechatQRModal: (e) => {
      e.preventDefault()
      document.getElementById('popup').classList.add('show')
    },
    closeWechatQRModal: (e) => {
      e.preventDefault()
      if (e.target.tagName.toLowerCase() !== 'img') {
        document.querySelector('#popup').classList.remove('show')
      }
    },
    toggleNavBar: (e) => {
      e.preventDefault()
      console.log('e.target =>', e.target)
      document.querySelector('#navBarToggle').classList.toggle('collapsed')
      document.querySelector('#navbarCollapse').classList.toggle('in')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: none;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  text-align: center;
  background-color: rgba(0, 0, 0, .5);
  z-index: 9
}
.popup img {
  max-width: 90%;
}
.popup .show {
  display: block;
}
</style>
