import Vue from 'vue';
import Vuex from 'vuex';

import faker from 'faker';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    users: [],
  },

  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },

    setUsers(state, payload) {
      state.users = payload;
    },
  },

  actions: {
    async getMoreUser({ state }) {
      return new Promise((resolve) => {
        const count = 10;
        const timeout = 1000;

        setTimeout(() => {
          const lastId = state.users.length + 1;
          const users = [];

          for (let id = lastId; id < lastId + count; id += 1) {
            users.push({
              id,
              number: faker.random.number(),
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              title: faker.name.title(),
              avatar: faker.image.avatar(),
              biography: faker.lorem.text(),
            });
          }

          resolve(users);
        }, timeout);
      });
    },
  },
});
