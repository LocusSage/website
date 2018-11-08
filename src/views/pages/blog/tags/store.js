import axios from 'axios'
const state = {
  tags: []
}

const getters = {
  'blog:tags': state => state.tags
}

const mutations = {
  'blog:update-tags': function (state, tagId) {
    state.tags = tagId
  }
}

const actions = {
  'blog:tags:load-data': async (context, tagId) => {
    await axios.get(`http://52.15.245.136:4080/wp-json/wp/v2/posts?tags=${tagId}&_embed=true`).then(response => {
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
