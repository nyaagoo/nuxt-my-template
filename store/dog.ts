import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { counterStore } from '~/utils/store-accessor';

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'dog'
})
export default class Dog extends VuexModule {
  dogList: { name: string; ruby: string }[] = [
    { name: 'Borzoi', ruby: 'ボルゾイ' },
    { name: 'chihuahua', ruby: 'チワワ' }
  ];
  @Mutation
  setDogList(dogList: { name: string; ruby: string }[]) {
    this.dogList = dogList;
  }

  @Action({ rawError: true })
  addDog(dog: { name: string; ruby: string }) {
    this.setDogList([...this.dogList, dog]);
    counterStore.increment();
  }

  /*
  @MutationAction({ mutate: ['counter1', 'counter2'] })
  async fetch() {
    return await { counter1: 20, counter2: 30 };
  }
  */
}
