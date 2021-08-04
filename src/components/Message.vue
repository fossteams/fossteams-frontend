<template>
  <div class="message" v-if="message != null && validMessage">
    <img src="https://randomuser.me/api/portraits/men/1.jpg" class="profile-picture" />
    <div class="chat-bubble">
      <div class="message-metadata">
        <div class="author-name">{{ message.imDisplayName }}</div>
        <div class="message-timestamp">
          {{ messageTimestamp }}
        </div>
      </div>
      <div class="message-content">
        {{ message.content.trim().replace(/^\s+$/m,"").replace("\n\n", "\n") }}
      </div>
    </div>
  </div>

  <div class="message-thread-replies">
    <Message v-for="reply in message.replies" v-bind:key="reply.id" :message="reply"/>
  </div>
</template>

<script lang="ts">
import { Message } from '@/types/types';
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default class MessageComponent extends Vue {
    @Prop()
    message: Message | null = null;

    get messageTimestamp(): string {
      if (this.message == null) {
        return '';
      }
      dayjs.extend(relativeTime);
      return dayjs(this.message.originalArrivalTime).fromNow();
    }

    get validMessage(): boolean {
      if (this.message == null) {
        return false;
      }
      return ['RichText/Html', 'Text']
        .indexOf(this.message.type) !== -1;
    }
}
</script>

<style lang="scss" scoped>
div.message {
  $profilePictureSize: 60px;
  display: grid;
  grid-template-columns: $profilePictureSize 10fr;
  column-gap: 15px;
  color: #fff;
  margin-bottom: 15px;

  img.profile-picture {
    height: $profilePictureSize;
    border-radius: $profilePictureSize;
  }

  div.chat-bubble {
    background: rgb(0, 84, 227);
    background: linear-gradient(49deg, rgba(0, 84, 227, 0.93) 9%, rgba(8, 158, 255, 0.93) 64%);
    padding: 5px 15px 5px 15px;
    border-radius: 10px;

    div.message-metadata {
      display: flex;
      font-size: 0.8em;
      margin-bottom: 5px;

      div.message-timestamp {
        margin-left: 10px;
      }

      div.author-name {
        display: inline-block;
        font-weight: bold;
      }
    }

    div.message-content {
      white-space: pre-line;
    }
  }
}

div.message-thread-replies {
  margin-left: 100px;
}
</style>
