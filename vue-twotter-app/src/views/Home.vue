<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="users-list">
      <router-link v-for="(user, index) in users" :key="index" :to="{ name: 'UserProfile', params: { userId: user.id }}">
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { reactive } from 'vue';
import { users } from '@/assets/users.js';

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }

  setup() {
    const state = reactive({
      count: 0,
    })

    return {
      state,
      users
    }
  }

}
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;

  .users-list {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }
}



</style>