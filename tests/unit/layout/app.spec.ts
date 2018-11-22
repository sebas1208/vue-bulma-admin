import { shallowMount, mount, Wrapper } from "@vue/test-utils";
import App from "@/App.vue";


describe("App Test", () => {
    let wrapper: Wrapper<App>;

    beforeEach(() => {
       wrapper = shallowMount(App);
    });

    it("Test App", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
