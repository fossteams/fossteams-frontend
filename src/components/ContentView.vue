<template>
    <div class="content-view">
      <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class ContentView extends Vue {
}
</script>

<style lang="scss" scoped>
div.content-view {
  border-radius: 0px 10px 10px 0px;
  background-color: #1c1d27ef;
}
</style>
