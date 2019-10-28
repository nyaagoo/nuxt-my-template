/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Counter from '~/store/counter'
import Dog from '~/store/dog'

let counterStore: Counter
let dogStore: Dog

function initializeStores(store: Store<any>): void {
  counterStore = getModule(Counter, store)
  dogStore = getModule(Dog, store)
}

export { initializeStores, counterStore, dogStore }
