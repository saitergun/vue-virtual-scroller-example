<template>
  <span class="block p-8" v-if="user">
    <span class="flex flex-col bg-white bg-gray-100 max-w-lg mx-auto p-4">
      <div class="flex items-center justify-start">
        <div>
          <img class="block w-16 h-16 rounded-full" :src="user.avatar" />
        </div>

        <div class="flex-1 ml-4">
          <router-link
            :to="`/${user.id}`"
            class="font-bold text-lg"
          >{{user.id}}. {{user.firstName}} {{user.lastName}}</router-link>

          <h4>{{user.title}}</h4>
        </div>
      </div>

      <div class="my-4">
        <p class="whitespace-pre-wrap">{{user.biography}}</p>
      </div>
    </span>

    <span class="block w-full h-screen" />
  </span>
</template>

<script>
export default {
  name: 'Post',

  props: {
    id: {
      type: Number,
      default: () => 0,
    },
  },

  data: () => ({
    user: null,
  }),

  created() {
    const u = this.$store.state.users.find((user) => Number(user.id) === Number(this.id));

    if (u) {
      this.user = u;
    }
  },
};
</script>
