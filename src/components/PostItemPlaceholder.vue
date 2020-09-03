<template>
  <section class="flex flex-col bg-white border py-4 px-4">
    <header class="flex items-center justify-start">
      <figure class="w-16 h-16 bg-gray-200 animate-pulse rounded-full" />

      <div class="flex-1 ml-4">
        <span class="block w-32 h-5 bg-gray-200 animation-pulse rounded" />
        <span class="block w-56 h-3 bg-gray-200 animation-pulse rounded mt-2" />
      </div>
    </header>

    <main class="mt-4">
      <span class="block w-full h-4 bg-gray-200 animation-pulse rounded" />
      <span class="block w-2/3 h-4 bg-gray-200 animation-pulse rounded mt-2" />
    </main>
  </section>
</template>

<script>
export default {
  name: 'PostItemPlaceholder',
};
</script>
