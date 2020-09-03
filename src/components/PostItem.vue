<template>
  <section class="flex flex-col bg-white border py-4 px-4" v-if="item">
    <header class="flex items-center justify-start">
      <figure>
        <img class="block w-16 h-16 rounded-full" :src="item.avatar" />
      </figure>

      <div class="flex-1 ml-4">
        <router-link
          :to="`/${item.id}`"
          class="font-bold text-lg"
        >{{item.id}}. {{item.firstName}} {{item.lastName}}</router-link>

        <h4>{{item.title}}</h4>
      </div>
    </header>

    <main class="mt-4">
      <p class="whitespace-pre-wrap">{{item.biography}}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'PostItemPlaceholder',

  props: {
    item: {
      type: Object,
      default: () => null,
    },
  },
};
</script>
