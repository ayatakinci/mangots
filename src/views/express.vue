<template>
  <div>
    <ul>
      <li v-for="cloth in clothes" :key="clothes.id">
        <nuxt-link :to="`/posts/${cloth.slug}`">{{ cloth.title }} {{ cloth.id }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clothes: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await axios.fetch('http://localhost:3000/api/clothes');
      this.clothes = res.data;
    }
  }
}
</script>
