<template>
  <div id="app">
    <nav>
      <div class="navigation__logo">
        Twotter
      </div>
      <div class="navigation__user">
        {{ state.user.username }}
      </div>
    </nav>
    <UserProfile />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UserProfile from "./components/UserProfile.vue"
import { reactive } from 'vue'

export default {
  name: "App",
  components: {
    UserProfile,
  },

  // composition api
  setup () {
    const state = reactive({
      user: {
        username: '@benq'
      }
    })

    return {
      state
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;
  /* display: flex;
  flex-direction: column;
  text-align: center; */

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deepskyblue;
    color: white;
  }

    .navigation__logo {
      font-weight: bold;
      font: outline;
      font-size: 24px;
    }

    .navigation__user {
      font-weight: bold;
      font: outline;
    }
}
</style>
