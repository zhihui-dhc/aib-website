const state = {
  visibleElements: {
    faq: [],
    plan: [],
    whitepaper: []
  }
}

const mutations = {
  SET_VISIBLE_IDS_FAQ (state, value) {
    state.visibleElements.faq = value
  },
  SET_VISIBLE_IDS_PLAN (state, value) {
    state.visibleElements.plan = value
  },
  SET_VISIBLE_IDS_WHITEPAPER (state, value) {
    state.visibleElements.whitepaper = value
  }
}

export default {
  state,
  mutations
}
