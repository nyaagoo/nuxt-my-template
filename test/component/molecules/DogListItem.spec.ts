import { mount } from '@vue/test-utils';
import DogListItem from '~/components/molecules/DogListItem.vue';

describe('DogListItem', () => {
  beforeAll(() => {});
  test('DogListItem.vue is a Vue instance', () => {
    const wrapper = mount(DogListItem, {
      propsData: {
        dogProp: { name: 'test', ruby: 'test' }
      }
    });
    expect(wrapper.isVueInstance).toBeTruthy();
    expect(wrapper.props().dogProp.name).toBe('test');
  });
});
