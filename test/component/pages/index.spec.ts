import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import Index from '~/pages/index.vue';

import { initializeStores, counterStore } from '~/utils/store-accessor';
import Dog from '~/store/dog';
import Counter from '~/store/counter';

let store: Store<any>;
let localVue = createLocalVue();
describe('index', () => {
  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store({ modules: { dog: Dog, counter: Counter } });
    initializeStores(store);
  });

  test('index.vue is a Vue instance', () => {
    const wrapper = mount(Index, { store, localVue });
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('index.vue method get count', () => {
    const wrapper = shallowMount(Index, { store, localVue });
    counterStore.setCounter1(15);
    expect((wrapper.vm as any).count).toBe(15);
  });

  test('index.vue method decrement', () => {
    const wrapper = shallowMount(Index, { store, localVue });
    counterStore.setCounter1(10);
    (wrapper.vm as any).decrement();
    expect(counterStore.counter1).toBe(9);
  });

  test('index.vue method increment', () => {
    const wrapper = shallowMount(Index, { store, localVue });
    counterStore.setCounter1(10);
    (wrapper.vm as any).increment();
    expect(counterStore.counter1).toBe(11);
  });

  test('index.vue method reset', async () => {
    const wrapper = shallowMount(Index, { store, localVue });
    await (wrapper.vm as any).reset();
    expect(counterStore.counter1).toBe(30);
    expect(counterStore.counter2).toBe(30);
  });
});
