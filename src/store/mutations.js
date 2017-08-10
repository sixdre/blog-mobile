import {
    UPDATE_DIRECTION,
} from './mutation-types'

import getters from './getters'

const state = {
  direction: 'forward',
};

const mutations = {
  [UPDATE_DIRECTION](state,payload) {
    state.direction = payload.direction
  },
};

export default {
  state,
  mutations,
  getters
}
