<template lang="pug">
  .container
    div
      logo
      h1.title nuxt-my-template
      h2.subtitle {{ greet }} My groundbreaking Nuxt.js project
      p {{ count }}
      button(@click="increment()") +
      button(@click="decrement()") -
      button(@click="reset()") RESET
      DogList
      .links
        a.button--green(href='https://nuxtjs.org/' target='_blank') Documentation
        a.button--grey(href='https://github.com/nuxt/nuxt.js' target='_blank') GitHub
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Logo from '~/components/atoms/Logo.vue';
import DogList from '~/components/organisms/DogList.vue';

import { counterStore } from '~/utils/store-accessor';

@Component({
  components: { Logo, DogList }
})
export default class Index extends Vue {
  greet = 'hello';
  get count(): number {
    return counterStore.counter1;
  }
  increment() {
    counterStore.increment();
  }
  decrement() {
    counterStore.decrement();
  }
  async reset() {
    await counterStore.fetch();
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content center
  align-items center
  margin 0 auto
  min-height 100vh
  text-align center
.title
  display block
  color #35495e
  letter-spacing 1px
  font-weight 300
  font-size 100px
  font-family 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
.subtitle
  padding-bottom 15px
  color #526488
  word-spacing 5px
  font-weight 300
  font-size 42px
.links
  padding-top 15px
</style>
