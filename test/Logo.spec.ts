import { mount } from '@vue/test-utils';
import LogoNuxt from './../components/atoms/Logo.vue';

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LogoNuxt);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
