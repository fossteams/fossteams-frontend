<template>
  <div class="conversation-header">
    <h4>{{ conversationId }}</h4>
  </div>
  <div class="messages" v-if="messages != undefined">
    <template v-for="message in messages.messages" v-bind:key="message.id">
      <message-component :message="message"/>
    </template>
  </div>
</template>

<script lang="ts">
import { Message } from '@/types/types';
import axios from 'axios';
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import MessageComponent from '@/components/Message.vue';

interface MessagesResponse {
  messages: Message[]
}

@Options({
  components: {
    MessageComponent,
  },
})
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
}

</style>
