<template>
  <Conversations v-bind:conversations="conversations"></Conversations>
  <ContentView></ContentView>
</template>

<script lang="ts">
import axios from 'axios';
import { Options, Vue } from 'vue-class-component';
import Conversations from './components/Conversations.vue';
import ContentView from './components/ContentView.vue';
import { ConversationsResponse } from './types/types';

@Options({
  components: {
    Conversations,
    ContentView,
  },
})
export default class App extends Vue {
  conversations: ConversationsResponse | null = null;

  async mounted(): Promise<void> {
    this.conversations = await (await axios.get('http://127.0.0.1:8050/api/v1/conversations')).data;
  }
}
</script>

<style lang="scss">
body {
  color: #eee;
  background: linear-gradient(44deg, #242631 8%, #303452, #555979 80%);
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 240px 5fr;
  column-gap: 5px;
  margin: 8px 8px 8px 50px;
}
</style>
