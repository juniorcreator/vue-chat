<template>
    <div class="chat container">
        <h2 class="center teal-text">Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul ref="list" class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text name">{{message.name}}</span>
                        <span class="grey-text text-darken-3">msg: {{message.message}}</span>
                        <span class="grey-text time">time {{message.time}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
  import db from '@/firebase/init'
  import moment from 'moment'
    import NewMessage from '@/components/NewMessage'
  export default {
    name: "Chat",
    props: ['name'],
    components: {
      NewMessage,
    },
    data() {
      return {
        messages: [],
      }
    },
    methods: {
    },
    created() {
      let ref = db.collection('messages').orderBy('time');
      ref.onSnapshot( snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type == 'added') {
            let doc = change.doc;
            this.messages.push({
              message: doc.data().message,
              name: doc.data().name,
              time: moment(doc.data().time).format('lll'),
              id: doc.id
            });
            console.log(this.messages);
          }
        });
      })
    },
  }
</script>

<style>
    .bold {
        font-weight: bold;
    }
    .chat {
        max-width: 600px;
    }
    .chat .time {
        display: block;
        font-size: 0.8em;
    }
    .chat .name {
        font-weight: bold;
    }
    .messages li {
        margin-bottom: 20px;
    }
    .messages {
        max-height: 300px;
        overflow-y: scroll;
    }
</style>