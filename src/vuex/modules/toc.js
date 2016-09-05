const state = {
  faq: {
    elementsVisible: [],
    tocVisible: true
  },
  plan: {
    elementsVisible: [],
    tocVisible: true
  },
  whitepaper: {
    elementsVisible: [],
    tocVisible: true
  }
}

const mutations = {
  SET_FAQ_ELEMENTS_VISIBLE (state, value) {
    state.faq.elementsVisible = value
  },
  SET_FAQ_TOC_VISIBLE (state, value) {
    state.faq.tocVisible = value
  },
  SET_PLAN_ELEMENTS_VISIBLE (state, value) {
    state.plan.elementsVisible = value
  },
  SET_PLAN_TOC_VISIBLE (state, value) {
    state.plan.tocVisible = value
  },
  SET_WHITEPAPER_ELEMENTS_VISIBLE (state, value) {
    state.whitepaper.elementsVisible = value
  },
  SET_WHITEPAPER_TOC_VISIBLE (state, value) {
    state.whitepaper.tocVisible = value
  }
}

export default {
  state,
  mutations
}
