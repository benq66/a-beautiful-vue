<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__fullname">{{ fullName }}</h1>
      <h2 class="user-profile__username">@{{ user.username }}</h2>
      <div class="user-profile__follower-count">
        <strong>Followers:</strong> {{ followers }}
      </div>
    </div>
  </div>
  <!-- <button @click="followUser">
    Follow
  </button> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Hello World!"/> -->
</template>

<script>
export default {
  name: 'UserProfile',

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
}
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
  margin-right: 50px;
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
</style>