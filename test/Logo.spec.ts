import { createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import {
  initializeStores,
  dogStore,
  counterStore
} from '~/utils/store-accessor';
import Dog from '~/store/dog';
import Counter from '~/store/counter';

// 拡張された Vue コンストラクタを作成する
const localVue = createLocalVue();

// プラグインをインストールする
localVue.use(Vuex);
let store: Store<any>;
describe('Logo', () => {
  beforeAll(() => {
    store = new Vuex.Store({
      modules: { dog: Dog, counter: Counter }
    });
    initializeStores(store);
  });

  test('is a Vue instance', () => {
    dogStore.addDog({ name: 'sa', ruby: 'sa' });
    expect(counterStore.counter1).toBe(11);
  });
});
