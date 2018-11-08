import axios from 'axios'
const state = {
  post: []
}

const getters = {
  'blog:post': state => state.post
}

const mutations = {
  'blog:update-post': function (state, postId) {
    state.post = postId
  }
}

const actions = {
  'blog:post:load-data': async (context, postId) => {
    await axios.get(`http://52.15.245.136:4080/wp-json/wp/v2/posts/${postId}?_embed`).then(response => {
      context.commit('blog:update-post', response.data, postId)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
