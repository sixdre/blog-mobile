import {
    UPDATE_DIRECTION,
    UPDATE_LOADING,
} from './mutation-types'

import getters from './getters'

const state = {
  direction: 'forward',
  isLoading:false
};

const mutations = {
  [UPDATE_DIRECTION](state,payload) {
    state.direction = payload.direction
  },
  [UPDATE_LOADING](state,flag) {
    state.isLoading = flag
  },
};

export default {
  state,
  mutations,
  getters
}
