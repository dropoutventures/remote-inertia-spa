<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Link,
  },
  props: {
    token: String,
  },
  data() {
    return {
      form: this.$inertia.form({
        first_name: null,
        last_name: null,
        _token: this.token,
      }),
    };
  },
};
</script>

<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
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
        Creating New:
      </h2>
      <form @submit.prevent="form.post(route('ic.store'))">
        <span>First Name</span>
        <input type="text" v-model="form.first_name" />
        <br />
        <span>First Name</span>
        <input type="text" v-model="form.last_name" />
        <br />
        <span>Token</span>
        <input type="text" v-model="form._token" />
        <br />
        <button
          type="submit"
          :disabled="form.processing"
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
        >
          Do Request
        </button>
      </form>
    </div>
  </div>
</template>
