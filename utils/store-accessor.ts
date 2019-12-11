/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Dog from '~/store/dog';
import Counter from '~/store/counter';
let counterStore: Counter = {} as Counter;
let dogStore: Dog = {} as Dog;

function initializeStores(store: Store<any>): void {
  counterStore = getModule(Counter, store);
  dogStore = getModule(Dog, store);
}

export { initializeStores, counterStore, dogStore };
