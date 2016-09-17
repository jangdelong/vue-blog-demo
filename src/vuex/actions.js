// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）

export const incrementCounter = ({ dispatch, state }) => {
  dispatch('INCREMENT', 1)
}

export const newPost = ({ dispatch, state }, post) => {
  if (post.title.trim() && post.content.trim()) {
    dispatch('NEW_POST', post)
  }
}
