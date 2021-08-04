<template>
  <div class="chat-view">
    <div class="message" v-for="message in this.messages" v-bind:key="message.conversationId">
      {{ message.content }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Message } from '../types/types';

export default class ChatView extends Vue {
  @Prop()
  messages: Message[] | null = null;
}
</script>

<style lang="scss" scoped>
</style>
