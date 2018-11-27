import db from 'nedb-shelter'
import axios from 'axios';
import store from '@/store'

const state = {
  recent: "",
  search: "",
  filtered: ""
}

const getters = {
  "support:recent-posts": state => state.recent,
  "support:search-posts": state => async keyword => {
    if (!state.search) {
      await store.dispatch("support:fetch-search-posts")
      return state.search
    }
    
    if (!keyword) {
      return state.search
    }

    state.filtered = state.search.filter(post => post.title.rendered.toLowerCase().includes(keyword.toLowerCase()))
  },
  "support:filtered-posts": state => state.filtered
}

const mutations = {
  "support:set-recent-posts": (state, posts) => { state.recent = posts },
  "support:set-searched-posts": (state, posts) => { state.search = posts }
}

const actions = {
  "support:fetch-search-posts": async context => {
    let postsSearched = await axios("http://52.15.245.136:4080/wp-json/wp/v2/posts?categories=22")
    store.commit("support:set-searched-posts", postsSearched.data)
    
    return
  },
  "support:recent-posts": async context => {
    await context.dispatch("support:init-database")
    
    let posts = await db.schema("support:recent-posts").query()
    
    context.commit("support:set-recent-posts", posts)

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}