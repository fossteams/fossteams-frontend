<template>
  <div class="conversation-header">
    <h4>{{ conversationId }}</h4>
  </div>
  <div class="messages" v-if="messages != undefined">
    <div class="message" v-for="message in messages.messages" v-bind:key="message.id">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" class="profile-picture">
      <div class="chat-bubble">
        {{ message.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Message } from '@/types/types';
import axios from 'axios';
import { Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

interface MessagesResponse {
  messages: Message[]
}

export default class ContentView extends Vue {
  @Prop()
  conversationId = '-1';

  messages: MessagesResponse | null = null;

  mounted(): void {
    this.getMessages();
  }

  @Watch('conversationId')
  async getMessages(): Promise<void> {
    this.messages = null;
    this.messages = await (await axios.get(`http://127.0.0.1:8050/api/v1/conversations/${this.conversationId}`)).data;
  }
}
</script>

<style lang="scss" scoped>
div.conversation-header {
  background-color: rgba(100, 100, 100, 0.2);
  height: 30px;
  line-height: 30px;
}

div.messages {
  margin: 20px;

  div.message {
    $profilePictureSize: 60px;
    display: grid;
    grid-template-columns: $profilePictureSize 10fr;
    column-gap: 15px;
    color: #FFF;
    margin-bottom: 15px;

    img.profile-picture {
        height: $profilePictureSize;
        border-radius: $profilePictureSize;
    }

    div.chat-bubble {
      background: rgb(0,84,227);
      background: linear-gradient(49deg, rgba(0,84,227,0.93) 9%, rgba(8,158,255,0.93) 64%);
      padding: 5px 15px 5px 15px;
      border-radius: 10px;
    }
  }
}

</style>
