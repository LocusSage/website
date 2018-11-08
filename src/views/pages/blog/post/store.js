import axios from 'axios'
const state = {
  post: [],
  posts: []
}

const getters = {
  'blog:post': state => state.post,
  'blog:posts:continue-reading': state => state.posts
}

const mutations = {
  'blog:update-post': function (state, postId) {
    state.post = postId
  },
  'blog:update-continue-reading': function (state, posts) {
    state.posts = posts
  }
}

const actions = {
  'blog:post:load-data': async (context, postId) => {
    await axios.get(`http://52.15.245.136:4080/wp-json/wp/v2/posts/${postId}?_embed`).then(response => {
      context.commit('blog:update-post', response.data, postId)
    })
  },
  'blog:post:continue-reading': async context => {
    await axios.get('http://52.15.245.136:4080/wp-json/wp/v2/posts?_embed&per_page=2').then(response => {
      context.commit('blog:update-continue-reading', response.data)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
