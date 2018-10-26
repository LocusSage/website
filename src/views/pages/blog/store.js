import axios from 'axios'
const state = {
  posts: []
}

const getters = {
  'blog:posts': state => state.posts
}

const mutations = {
  'blog:update-posts': function (state, posts) {
    state.posts = [...posts]
  }
}

const actions = {
  'blog:load-data': async context => {
    await axios.get('http://52.15.245.136:4080/wp-json/wp/v2/posts?_embed&per_page=5').then(response => {
      context.commit('blog:update-posts', response.data)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
