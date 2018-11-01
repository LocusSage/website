import axios from 'axios'
const state = {
  posts: [],
  post: [],
  tags: []
}

const getters = {
  'blog:posts': state => state.posts,
  'blog:post': state => state.post,
  'blog:tags': state => state.tags
}

const mutations = {
  'blog:update-posts': function (state, posts) {
    state.posts = [...posts]
  },
  'blog:update-post': function (state, postId) {
    state.post = postId
  },
  'blog:update-tags': function (state, tagId) {
    state.tags = tagId
  }
}

const actions = {
  'blog:load-data': async context => {
    await axios.get('http://52.15.245.136:4080/wp-json/wp/v2/posts?_embed&per_page=5').then(response => {
      context.commit('blog:update-posts', response.data)
    })
  },
  'blog:post:load-data': async (context, postId) => {
    await axios.get(`http://52.15.245.136:4080/wp-json/wp/v2/posts/${postId}?_embed`).then(response => {
      context.commit('blog:update-post', response.data, postId)
    })
  },
  'blog:post:continue-reading': async context => {
    await axios.get('http://52.15.245.136:4080/wp-json/wp/v2/posts?_embed&per_page=2').then(response => {
      context.commit('blog:update-posts', response.data)
    })
  },
  'blog:tags:load-data': async (context, tagId) => {
    await axios.get(`http://52.15.245.136:4080/wp-json/wp/v2/posts?tags=${tagId}&_embed`).then(response => {
      context.commit('blog:update-tags', response.data, tagId)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
