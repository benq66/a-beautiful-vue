<template>
  <div class="user-profile">
    <div>
      <p>User:</p>
      <div class="user-profile__user-panel">
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
          Admin
        </div>
        <div class="user-profile__star-badge" v-else-if="state.user.followers > 1000">
          Star
        </div>
        <div class="user-profile__user-badge" v-else>
          User
        </div>
        <h1 class="user-profile__fullname">{{ fullName }}</h1>
        <h2 class="user-profile__username">@{{ state.user.username }}</h2>
        <div class="user-profile__follower-count">
          <strong>Followers:</strong> {{ state.followers }}
        </div>
      </div>

      <button class="user-profile__follow-user-button" @click="followUser">
        Follow
      </button>

    <div class="user-profile__new-twoot-form" :class="{'--characters-limit-exceeded': newTwootCharacterCount > 180}">
      <label class="user-profile__new-twoot-label" for="newTwoot">
        <strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)
      </label>
      <form @submit.prevent="createNewTwoot">
        <textarea class="user-profile__new-twoot-text-area" id="newTwoot" rows="4" v-model="state.newTwootContent"></textarea>

        <div class="user-profile__new-twoot-panel">
          <div class="user-profile__new-twoot-type">
            <label class="user-profile__new-twoot-label" for="newTwootType"><strong>Type: </strong></label>
            <select id="newTwootType" v-model="state.selectedTwootType">
              <option :value="option.value" v-for="(option, index) in state.twootTypes" :key="index">
                {{ option.name }}
              </option>
            </select>
            <button class="user-profile__new-twoot-submit-button">
              Twoot!
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>

    <div class="user-profile__twoots-wrapper">
      <Twoots :twoots="state.user.twoots" @toggle-favourite-twoot="toggleFavouriteTwoot"/>
    </div>
  </div>
</template>

<script>
import Twoots from "./Twoots.vue"
import { reactive, computed } from 'vue';

export default {
  name: "UserProfile",
  components: {
    Twoots,
  },

  // composition api
  setup() {
    const state = reactive({
      newTwootContent: "",
      selectedTwootType: "instant",
      twootTypes : [
        {value: "draft", name: "Draft"},
        {value: "instant", name: "Instant Twoot"},
      ],
      followers: 0,
      user: {
        id: 1,
        username: "benq",
        firstName: "Benq",
        lastName: "Hvitt",
        email: "benq@benq.com",
        isAdmin: true,
        twoots: [
          {id: 2, username: "benq", content: "This is amazing!", favourite: false},
          {id: 1, username: "benq", content: "Totaly agree!", favourite: false},
        ],
      },
    })

    const newTwootCharacterCount = computed(() => state.newTwootContent.length)
    const fullName = computed(() => `${state.user.firstName} ${state.user.lastName}`)

    function followUser() {
      state.followers++;
    }

    // can be done with hashmap for better performance
    function toggleFavouriteTwoot(id) {
      for (const [index, twoot] of state.user.twoots.entries()) {
        if (twoot.id === id) {
          state.user.twoots[index].favourite = !state.user.twoots[index].favourite;
        }
      }
    }

    function createNewTwoot() {
      if (state.newTwootContent && state.selectedTwootType === "instant") {
        state.user.twoots.unshift({
          id: state.user.twoots.length + 1,
          username: state.user.username,
          content: state.newTwootContent,
          favourite: false,
        });
        state.newTwootContent = "";
      }
    }

    return {
      state,
      newTwootCharacterCount,
      fullName,
      followUser,
      toggleFavouriteTwoot,
      createNewTwoot,
    }
  },

  // initial vars and objects
  // data() {
  //   return {
  //     newTwootContent: "",
  //     selectedTwootType: "instant",
  //     twootTypes : [
  //       {value: "draft", name: "Draft"},
  //       {value: "instant", name: "Instant Twoot"},
  //     ],
  //     followers: 0,
  //     user: {
  //       id: 1,
  //       username: "benq",
  //       firstName: "Benq",
  //       lastName: "Hvitt",
  //       email: "benq@benq.com",
  //       isAdmin: true,
  //       twoots: [
  //         {id: 2, username: "benq", content: "This is amazing!", favourite: false},
  //         {id: 1, username: "benq", content: "Totaly agree!", favourite: false},
  //       ],
  //     },
  //   };
  // },

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
  // computed: {
  //   fullName() {
  //     return `${this.user.firstName} ${this.user.lastName}`;
  //   },
  // },

  // functions
  // methods: {
  //   followUser() {
  //     this.followers++;
  //   },
  //   // can be done with hashmap for better performance
  //   toggleFavouriteTwoot(id) {
  //     for (const [index, twoot] of this.user.twoots.entries()) {
  //       if (twoot.id === id) {
  //         this.user.twoots[index].favourite = !this.user.twoots[index].favourite;
  //       }
  //     }
  //   },
  //   createNewTwoot() {
  //     if (this.newTwootContent && this.selectedTwootType === "instant") {
  //       this.user.twoots.unshift({
  //         id: this.user.twoots.length + 1,
  //         username: this.user.username,
  //         content: this.newTwootContent,
  //         favourite: false,
  //       });
  //       this.newTwootContent = "";
  //     }
  //   },
  // },

  // this will run whenever the page is first opened, similar to created()
  mounted() {
    this.followUser();
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    margin-bottom: auto;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;

    .user-profile__admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
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
  }

  .user-profile__follow-user-button {
    margin: 10px 0 0 15px;
    cursor: pointer;
  }

  .user-profile__new-twoot-form {
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    margin-top: 40px;
    margin-bottom: auto;
    padding: 10px 20px 20px;
    // background-color: white;
    // border-radius: 5px;
    // border: 1px solid #DFE3E8;

    .user-profile__new-twoot-label {
      margin-bottom: 15px;
    }

    .user-profile__new-twoot-text-area {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 15px;
    }

    .user-profile__new-twoot-panel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 5%;
      // width: 100%;
      // background: white;
    }

    .user-profile__new-twoot-submit-button {
      margin: 0 120px;
      // width: 100%;
      // min-width: 30%;
    }

    &.--characters-limit-exceeded {
      color: red;
      border-color: red;

      button {
        border: none;
        background-color: red;
        color: white;
      }
    }
  }
}

.user-profile__twoots-wrapper {
  width: 90%;
}
</style>
