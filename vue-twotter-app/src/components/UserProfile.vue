<template>
  <div class="user-profile">
    <div>
      <p>User:</p>
      <div class="user-profile__user-panel">
        <div class="user-profile__admin-badge" v-if="user.isAdmin">
          Admin
        </div>
        <div class="user-profile__star-badge" v-else-if="user.followers > 1000">
          Star
        </div>
        <div class="user-profile__user-badge" v-else>
          User
        </div>
        <h1 class="user-profile__fullname">{{ fullName }}</h1>
        <h2 class="user-profile__username">@{{ user.username }}</h2>
        <div class="user-profile__follower-count">
          <strong>Followers:</strong> {{ followers }}
        </div>
      </div>
    </div>
    <div class="user-profile__twoots-wrapper">
      <Twoots :twoots="user.twoots" />
    </div>
  </div>

  <!-- <button @click="followUser">
    Follow
  </button> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Hello World!"/> -->
</template>

<script>
import Twoots from "./Twoots.vue"

export default {
  name: "UserProfile",
  components: {
    Twoots,
  },

  // initial vars and objects
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: "benq",
        firstName: "Benq",
        lastName: "Hvitt",
        email: "benq@benq.com",
        isAdmin: true,
        twoots: [
          { id: 1, username: "benq", content: "This is amazing!"},
          { id: 2, username: "benq", content: "Totaly agree!"},
        ],
      },
    };
  },

  // watch for changes of component elements (vars, computed, etc)
  // and execute the code accordingly
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.fullName} got a new follower!`);
      }
    },
  },

  // vars that compute dynamically based on their content
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },

  // functions
  methods: {
    followUser() {
      this.followers++;
    },
  },

  // this will run whenever the page is first opened, similar to created()
  mounted() {
    this.followUser();
  },
};
</script>

<style>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}

.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  margin-bottom: auto;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #DFE3E8;
}

.user-profile__fullname {
  margin: 0;
}

.user-profile__username {
  margin: 0;
}

.user-profile__follower-count {
  margin-top: 10px;
}

.user-profile__admin-badge {
  background: rebeccapurple;
  color: white;
  border-radius: 5px;
  margin-right: auto;
  padding: 0 10px;
  font-weight: bold;
}

.user-profile__twoots-wrapper {
  width: 90%;
}
</style>