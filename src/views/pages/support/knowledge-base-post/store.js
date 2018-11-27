import axios from 'axios'
import db from 'nedb-shelter'

const state = {
  post: '',
  recommended: ''
}

const mutations = {
  'support:set-single-post': (state, payload) => { state.post = payload },
  'support:set-recommended-posts': (state, payload) => { state.recommended = payload }
}

const getters = {
  'support:single-post': state => state.post,
  'support:recommended-posts': state => state.recommended,
}

const actions = {
  'support:clear-single-post': async context => {
    context.state.post = ''
  },
  'support:fetch-single-post': async function (context, params) {
    let post = await axios(`http://52.15.245.136:4080/wp-json/wp/v2/posts/${params.id}?_embed`)
    context.commit('support:set-single-post', post.data)    
  },
  'support:fetch-recommended-posts': async context => {
    let posts = await axios(`http://52.15.245.136:4080/wp-json/wp/v2/posts/?tags=${context.state.post.tags[0]}`)
    context.commit('support:set-recommended-posts', posts.data)
  },
  'support:init-database': async context => {
    let database = await db.schema("support:recent-posts").query()
                            .then(response => response)
                            .catch(err => null)

    if (!database) {
      db.createDatabase("support:recent-posts", true, function () {
        console.log('Initialized database')
      })
    } else {
      let thirthyDaysAgo = new Date() - 30
      db.schema("support:recent-posts")
        .removeMany({ created_at: { $gt: { thirthyDaysAgo } } })
        .then(removed => {
          console.log('removed some items')
        })
    }
  },
  'support:save-recent-posts': async context => {
    await context.dispatch('support:init-database')

    let post = context.state.post

    let exists = await db.schema("support:recent-posts").query({id: post.id})
    
    if (exists.length <= 0) {
      db.schema("support:recent-posts")
      .insert(post)
      .then(done => {
        console.log('done creating')
      })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}