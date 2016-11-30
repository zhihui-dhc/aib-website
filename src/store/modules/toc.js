const state = {
  faq: {
    elementsVisible: [],
    tocVisible: true
  },
  whitepaper: {
    elementsVisible: [],
    tocVisible: true
  }
}

const mutations = {
  setFaqElementsVisible (state, value) {
    state.faq.elementsVisible = value
  },
  setFaqTocVisible (state, value) {
    console.log('MUTATION: setFaqTocVisible', value)
    state.faq.tocVisible = value
  },
  setWhitepaperElementsVisible (state, value) {
    state.whitepaper.elementsVisible = value
  },
  setWhitepaperTocVisible (state, value) {
    state.whitepaper.tocVisible = value
  }
}

export default {
  state,
  mutations
}
