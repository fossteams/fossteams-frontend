<template>
  <div class="message" v-if="message != null">
    <img src="https://randomuser.me/api/portraits/men/1.jpg" class="profile-picture" />
    <div class="chat-bubble">
      <div class="message-metadata">
        <div class="author-name">{{ message.imDisplayName }}</div>
        <div class="message-timestamp">
          {{ messageTimestamp }}
        </div>
      </div>
      <div class="message-content">
        {{ message.content }}
      </div>
    </div>
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
      font-size: 0.8em;
      margin-bottom: 0.5em;
    }
  }
}
</style>
