<script>
import { Link } from "@inertiajs/inertia-vue3";
import { Head } from "@inertiajs/inertia-vue3";
export default {
  components: {
    Head,
    Link,
  },
  props: {
    contact: Object,
  },
};
</script>

<template>
  <Head>
    <title>Showing Contact {{ contact.id }}</title>
    <meta name="description" content="Your page description" />
  </Head>
  <div class="bg-gray-50">
    <div
      class="
        mx-auto
        max-w-screen-xl
        px-4
        py-12
        sm:px-6
        lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8
      "
    >
      <h2
        class="
          text-3xl
          font-extrabold
          leading-9
          tracking-tight
          text-gray-900
          sm:text-4xl sm:leading-10
        "
      >
        Customer:
        <br />
        <span class="text-indigo-600">{{ contact.first_name }}</span>
      </h2>
    </div>
    <Link
      :href="route('index', { component: 'NotFound' })"
      class="
        inline-flex
        items-center
        justify-center
        rounded-md
        border border-transparent
        bg-pink-600
        px-5
        py-3
        text-base
        font-medium
        leading-6
        text-white
        transition
        duration-150
        ease-in-out
        hover:bg-pink-500
        focus:outline-none
      "
      >Homepage</Link
    >
  </div>
</template>
