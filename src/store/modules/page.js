import { ADD_TO_LIST, FETCH_DATA } from '@/store/store-types.js'

export default {
  state: () => ({
    list: []
  }),

  mutations: {
    [ADD_TO_LIST](state, data)
    {
      state.list = [...state.list, ...data]
    }
  },

  actions: {
    async [FETCH_DATA]({ commit }, p = 1)
    {
      try {

        const response = await fetch(`/api?page=${p}&results=30&seed=abc&inc=name,email,picture&noinfo`, {
          headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
          const { results } = await response.json()
          commit(ADD_TO_LIST, results)
        }

      } catch (e) {
        console.error(e.message)
      }
    }
  }
}
