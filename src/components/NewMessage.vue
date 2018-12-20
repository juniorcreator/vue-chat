<template>
    <div class="newMessage">
        <form @submit.prevent="addMessage">
            <label for="message">New message (enter to add):</label>
            <input type="text" name="message" v-model="newMessage">
            <p v-if="feedback" class="red-text">{{feedback}}</p>
        </form>
    </div>
</template>

<script>
    import db from '@/firebase/init'
  export default {
    name: "NewMessage",
    props: ['name'],
    data() {
      return {
        newMessage: null,
        feedback: null,
      }
    },
    methods: {
      addMessage() {
        if(this.newMessage) {
          db.collection('messages').add({
            name: this.name,
            message: this.newMessage,
            time: Date.now()
          })
            .catch(err => {
            console.log(err);
          });
          this.newMessage = null;
          this.feedback = null;
        }else {
          this.feedback = "please enter a message";
        }
      },
    }
  }
</script>

<style>

</style>