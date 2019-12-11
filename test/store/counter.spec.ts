import { createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { initializeStores, counterStore } from '~/utils/store-accessor';
import Counter from '~/store/counter';

// 拡張された Vue コンストラクタを作成する
const localVue = createLocalVue();

// プラグインをインストールする
localVue.use(Vuex);
let store: Store<any>;

describe('Logo', () => {
  beforeAll(() => {
    store = new Vuex.Store({
      modules: { counter: Counter }
    });
    initializeStores(store);
  });

  test('State initial value counter1', () => {
    expect(counterStore.counter1).toBe(10);
  });

  test('State initial value counter2', () => {
    expect(counterStore.counter2).toBe(20);
  });

  test('Mutation setCounter1', () => {
    counterStore.setCounter1(100);
    expect(counterStore.counter1).toBe(100);
  });

  test('Action increment', () => {
    counterStore.setCounter1(50);
    counterStore.increment();
    expect(counterStore.counter1).toBe(51);
  });

  test('Action decrement', () => {
    counterStore.setCounter1(50);
    counterStore.decrement();
    expect(counterStore.counter1).toBe(49);
  });

  test('MutationAction fetch', async () => {
    await counterStore.fetch();
    expect(counterStore.counter1).toBe(30);
    expect(counterStore.counter2).toBe(30);
  });
});
