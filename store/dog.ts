import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'dog'
})
export default class Dog extends VuexModule {
  dogList: { name: string; img: string }[] = [
    {
      name: 'Borzoi',
      img:
        'https://4.bp.blogspot.com/-MFulvRqUIPA/WwJZ0UiUhLI/AAAAAAABMIE/DsLMrwp4rng2hTbn5AzCEH-G3HbkuMYjACLcBGAs/s800/dog_borzoi.png'
    },
    {
      name: 'Chihuahua',
      img:
        'https://1.bp.blogspot.com/-GCsYYc_0tBE/WhUh1x6sc6I/AAAAAAABIN8/SeG4wLgwJ2EmIM6Sk1jq6TyFZMewu3qIgCLcBGAs/s800/dog_chihuahua_choco_tan.png'
    }
  ]

  @Mutation
  setDogList(dogList: { name: string; img: string }[]) {
    this.dogList = dogList
  }
}
