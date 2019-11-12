import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { teisu, counterStore, teisu2, setTeisu2 } from '~/store';

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'dog'
})
export default class Dog extends VuexModule {
  dogList: { name: string; ruby: string }[] = [
    { name: 'Borozoi', ruby: 'ボルゾイ' },
    { name: 'chihuahua', ruby: 'チワワ' }
  ];
  @Mutation
  setDogList(dogList: { name: string; ruby: string }[]) {
    this.dogList = dogList;
  }

  @Action({ rawError: true })
  addDog(dog: { name: string; ruby: string }) {
    this.setDogList([...this.dogList, dog]);
    console.log(teisu2);
    setTeisu2('world');
    console.log(teisu2);

    console.log(counterStore);
    console.log(teisu);
    // counterStore.increment();
  }

  /*
  @MutationAction({ mutate: ['counter1', 'counter2'] })
  async fetch() {
    return await { counter1: 20, counter2: 30 };
  }
  */
}
