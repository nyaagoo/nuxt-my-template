<template lang="pug">
  .dog-list-item
    span {{ dog.name }} {{ dog.ruby }}
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'dog-list-item',
  components: {}
})
export default class DogListItem extends Vue {
  @Prop({ required: true }) dogProp!: { name: string; ruby: string };

  get dog() {
    return this.dogProp;
  }
}
</script>
<style lang="stylus" scoped>
.dog-list-item
  background #fff
</style>
