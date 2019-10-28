<template lang="pug">
  .dog-list-item
    span {{ greet }} {{ dog }}
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'dog-list-item',
  components: {}
})
export default class DogListItem extends Vue {
  // TODO: TypeScriptのParserを入れたら初期化せずに!で置き換える
  @Prop({ required: true }) dog: { name: string; img: string } = {
    name: '1',
    img: '2'
  }
  @Prop({ required: true }) greet: string = 'hey'
}
</script>
<style lang="stylus" scoped>
.dog-list-item
  background #fff
</style>
