/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Counter from '~/store/counter';

let counterStore: Counter;

function initializeStores(store: Store<any>): void {
  counterStore = getModule(Counter, store);
}

export { initializeStores, counterStore };
