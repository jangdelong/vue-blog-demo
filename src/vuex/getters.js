// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：

export const getCount = state => {
  return state.counter.count
}
// 获取文章列表
export const getList = state => {
  return state.posts.list
}
// 获取单篇文章
export const getPost = state => {
  return state.post
}

// 获取反转数组
export const getReverseList = state => {
  return state.posts.list
}
