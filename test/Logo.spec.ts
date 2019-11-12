import { mount, createLocalVue } from '@vue/test-utils';
import { getModule } from 'vuex-module-decorators';
import Vuex, { Store } from 'vuex';
import LogoNuxt from './../components/atoms/Logo.vue';
import Dog from '~/store/dog';
import Counter from '~/store/counter';
import { initializeStores } from '~/store';
// import Counter from '~/store/counter';

// 拡張された Vue コンストラクタを作成する
const localVue = createLocalVue();

// プラグインをインストールする
localVue.use(Vuex);
let store: Store<any>;
describe('Logo', () => {
  beforeEach(async () => {
    store = new Vuex.Store({ modules: { dog: Dog, counter: Counter } });
    await initializeStores(store);
    store.hotUpdate({ modules: { dog: Dog } });
  });

  test('is a Vue instance', async () => {
    const counter = new Counter(store);
    counter.increment();

    // store.registerModule('Dog', Dog);
    const dogModule = getModule(Dog, store);
    const counterModule = getModule(Counter, store);
    console.log(await dogModule.addDog({ name: 'sdas', ruby: 'sdako' }));
    initializeStores(store);
    console.log(await dogModule.addDog({ name: 'sdas', ruby: 'sdako' }));
    console.log(dogModule.dogList);
    console.log(counterModule.counter1);
    // console.log(dogModule.dogList);

    // console.log(store.state.dogList);

    const wrapper = mount(LogoNuxt);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
