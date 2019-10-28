<template lang="pug">
  .dog-list
    ol.dog-list
      li.dog-list-item(v-for="dog in dogList" :key="dog.name") 
        DogListItem(:dog="dog" :greet="shjua")
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DogListItem from '~/components/molecules/DogListItem.vue'
import { dogStore } from '~/store/index'

@Component({
  name: 'dog-list',
  components: { DogListItem }
})
export default class DogList extends Vue {
  get dogList(): { name: string; img: string }[] {
    return dogStore.dogList
  }
}
</script>
<style lang="stylus" scoped>
.dog-list
  background #fff
</style>
