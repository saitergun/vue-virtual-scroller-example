<template>
  <span class="block bg-gray-100 max-w-lg px-8 mx-auto">
    <header class="text-center p-3">
      header might be here
    </header>

    <main>
      <DynamicScroller
        class="h-full"
        :items="users"
        :min-item-size="150"
      >
        <template #after>
          <PostItemPlaceholder v-for="n in 2" :key="n" />
        </template>

        <template v-slot="{ item, index, active }">
          <DynamicScrollerItem
            :item="item"
            :active="active"
            :size-dependencies="[item.biography]"
            :data-index="index"
          >
            <PostItem :item="item" />
          </DynamicScrollerItem>
        </template>
      </DynamicScroller>
    </main>

    <footer class="text-center p-3">
      <span>footer might be here</span>

      <span class="fixed right-0 bottom-0 p-2 z-50">
        <pre class="flex items-center justify-between bg-white text-xs border px-2"><span class="pr-8">isLoading</span> {{isLoading}}</pre>
        <pre class="flex items-center justify-between bg-white text-xs border px-2"><span class="pr-8">users.length</span> {{users.length}}</pre>
      </span>
    </footer>
  </span>
</template>

<script>
import { mapState } from 'vuex';

import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

import PostItem from '../components/PostItem.vue';
import PostItemPlaceholder from '../components/PostItemPlaceholder.vue';

export default {
  name: 'Home',

  components: {
    DynamicScroller,
    DynamicScrollerItem,
    PostItem,
    PostItemPlaceholder,
  },

  data: () => ({
    distanceToBottom: 0,
  }),

  computed: {
    ...mapState([
      'isLoading',
      'users',
    ]),
  },

  watch: {
    distanceToBottom(distance) {
      if (!this.isLoading && distance <= 300) {
        this.$store.commit('setIsLoading', true);

        this.$store.dispatch('getMoreUser').then((response) => {
          this.$store.commit('setUsers', this.users.concat(response));

          setTimeout(() => {
            this.$store.commit('setIsLoading', false);
          }, 300);
        });
      }
    },
  },

  methods: {
    scroll() {
      this.distanceToBottom = document.body.offsetHeight - (window.innerHeight + window.scrollY);
    },
  },

  mounted() {
    if (!this.users.length) {
      this.$store.dispatch('getMoreUser').then((response) => {
        this.$store.commit('setUsers', response);

        this.$store.commit('setIsLoading', false);
      });
    }

    window.addEventListener('scroll', this.scroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll);
  },
};
</script>
