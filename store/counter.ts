import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'counter'
})
export default class Counter extends VuexModule {
  counter1 = 10;
  counter2 = 20;

  @Mutation
  setCounter1(num: number) {
    this.counter1 = num;
  }

  @Action({ rawError: true })
  increment() {
    this.setCounter1(this.counter1 + 1);
  }

  @Action({ rawError: true })
  decrement() {
    this.setCounter1(this.counter1 - 1);
  }

  /*
  @MutationAction({ mutate: ['counter1', 'counter2'] })
  async fetch() {
    return await { counter1: 20, counter2: 30 };
  }
  */
}
