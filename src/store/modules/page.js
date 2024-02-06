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
    async [FETCH_DATA]()
    {
      //
    }
  }
}
