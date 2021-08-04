<template>
  <div class="conversations">
    <div class="teams" v-if="conversations != null">
      <div class="team" v-for="team in conversations.teams" v-bind:key="team.id">
        <div class="team-title">
          {{ team.displayName }}
        </div>
        <div class="channels">
          <template v-for="channel in team.channels" v-bind:key="channel.id">
            <router-link :to="'/conversations/' + channel.id">
              <div class="channel">
                <span class="channel-name">
                  {{ channel.displayName }}
                </span>
              </div>
            </router-link>
          </template>
        </div>
      </div>
    </div>

    <div class="chats" v-if="conversations != null">
      <div class="chat" v-for="chat in conversations.chats" v-bind:key="chat.id">
        {{ chat }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { ConversationsResponse } from '../types/types';

export default class Conversations extends Vue {
  @Prop()
  conversations: ConversationsResponse | null = null;
}
</script>

<style lang="scss" scoped>
div.conversations {
  border-radius: 8px 0px 0px 8px;
  padding-top: 5px;
  background-color: #1c1d27ef;
}

.team {
  color: #999;
  margin: 10px;
  margin-bottom: 20px;

  div.team-title {
    cursor: default;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  div.channels {
    > a {
        color: inherit;
        text-decoration: none;
    }

    div.channel {
      display: block;
      color: #CCC;
      text-decoration: none;
      font-size: 0.9em;
      margin: 5px 0px 5px 0px;
      height: 20px;
      padding: 5px;
      border-radius: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      line-height: 20px;

      span {
        text-decoration: none;
      }
    }

    div.channel:hover, a.router-link-active > div.channel {
      background-color: #2b2d3a;
    }
  }
}
</style>
