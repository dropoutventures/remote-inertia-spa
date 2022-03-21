<template>
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
        This Is A Demo
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex space-x-3">
          <Link
            :href="route('ic.edit', { contact: 1, component: 'Customer' })"
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
            >Show Contact</Link
          >
          <Link
            :href="route('ic.create')"
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
            >Create Contact</Link
          >
        </div>
        <!--<ButtonRepo />-->
      </div>
    </div>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
import ButtonRepo from "@/components/ButtonRepo.vue";

export default {
  components: {
    Link,
    ButtonRepo,
  },
};
</script>