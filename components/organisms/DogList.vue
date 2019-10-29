<template lang="pug">
  .dog-list
    ul
      li(v-for='dog in dogList' :key="dog.name" :dogProp="dog" is='dog-list-item')
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DogListItem from '~/components/molecules/DogListItem.vue';
import { dogStore } from '~/store';

@Component({
  name: 'dog-list',
  components: { 'dog-list-item': DogListItem }
})
export default class DogList extends Vue {
  get dogList() {
    return dogStore.dogList;
  }
}
</script>
<style lang="stylus" scoped>
.dog-list
  background #fff
</style>
