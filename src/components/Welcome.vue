<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h1 class="teal-text">Welcome</h1>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name</label>
          <input type="text" name="name" v-model="name" class="center-align">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal">Enter to chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: null,
      feedback: null,
    }
  },
  methods: {
    enterChat() {
      if(this.name && this.name.length > 2) {
        this.feedback = null;
        this.$router.push({name: 'Chat', params:{name: this.name}});
      }else {
        this.feedback = 'You must enter the name more than 2 symbols';
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .welcome {
    max-width: 400px;
  }
  .welcome h1 {
    font-size: 40px;
  }
  .welcome button {
    margin: 15px auto;
  }
  .welcome label {
    font-size: 18px;
  }

</style>
