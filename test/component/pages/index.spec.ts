import { mount } from '@vue/test-utils';
import index from '~/pages/index.vue';

describe('index', () => {
  beforeAll(() => {});
  test('index.vue is a Vue instance', () => {
    const wrapper = mount(index);
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

// TODO: Create vuex Counter module test
