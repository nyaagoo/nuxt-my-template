import { mount, shallowMount } from '@vue/test-utils';
import index from '~/pages/index.vue';

describe('index', () => {
  beforeAll(() => {});
  test('index.vue is a Vue instance', () => {
    const wrapper = mount(index);
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  s;
  test('Snapshot', () => {
    const wrapper = shallowMount(index);
    expect(wrapper.element).toMatchSnapshot();
  });
});
