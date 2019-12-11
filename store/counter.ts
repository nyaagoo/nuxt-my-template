import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction
} from 'vuex-module-decorators';

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'counter'
})
export default class Counter extends VuexModule {
  counter1: number = 10;
  counter2: number = 20;
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

  @MutationAction
  async fetch() {
    // API 通信等に使われるデコレータ awaitがつかないとエラーになるため、lintを切っている
    return await new Promise((resolve, _reject) =>
      resolve({
        counter1: 30,
        counter2: 30
      })
    );
  }
}
