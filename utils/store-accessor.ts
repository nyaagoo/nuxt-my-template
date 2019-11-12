/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Counter from '~/store/counter';
import Dog from '~/store/dog';

let counterStore: Counter;
let dogStore: Dog;
let teisu: number = 1000;
let teisu2: string = 'hello';

function initializeStores(store: Store<any>): void {
  counterStore = getModule(Counter, store);
  dogStore = getModule(Dog, store);
  teisu = 20000;
}

function setTeisu2(args: string): void {
  teisu2 = args;
}

export { initializeStores, setTeisu2, counterStore, dogStore, teisu, teisu2 };
