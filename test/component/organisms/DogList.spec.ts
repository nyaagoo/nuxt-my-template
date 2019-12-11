import { mount } from '@vue/test-utils';
import DogList from '~/components/organisms/DogList.vue';

describe('DogList', () => {
  beforeAll(() => {});
  test('DogList.vue is a Vue instance', () => {
    const wrapper = mount(DogList);
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
