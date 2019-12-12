import { mount, shallowMount } from '@vue/test-utils';
import DogList from '~/components/organisms/DogList.vue';

describe('DogList', () => {
  beforeAll(() => {});
  test('DogList.vue is a Vue instance', () => {
    const wrapper = mount(DogList);
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('Snapshot', () => {
    const wrapper = shallowMount(DogList);
    expect(wrapper.element).toMatchSnapshot();
  });
});
