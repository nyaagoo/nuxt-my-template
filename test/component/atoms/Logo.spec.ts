import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import {
  initializeStores,
  dogStore,
  counterStore
} from '~/utils/store-accessor';
import Dog from '~/store/dog';
import Counter from '~/store/counter';
import Logo from '~/components/atoms/Logo.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
let store: Store<any>;
describe('Logo', () => {
  beforeAll(() => {
    store = new Vuex.Store({
      modules: { dog: Dog, counter: Counter }
    });
    initializeStores(store);
  });
  test('Logo.vue can mount', () => {
    const wrapper = mount(Logo);
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('Snapshot', () => {
    const wrapper = shallowMount(Logo);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Module can access another module function', () => {
    dogStore.addDog({ name: 'sa', ruby: 'sa' });
    expect(counterStore.counter1).toBe(11);
  });
});
