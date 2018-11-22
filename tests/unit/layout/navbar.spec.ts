import { shallowMount, Wrapper } from "@vue/test-utils";
import Navbar from "@/layout/Navbar.vue";

describe("NavBar Test", () => {
    let wrapper: Wrapper<Navbar>;

    beforeEach(() => {
        wrapper = shallowMount(Navbar);
    });

    it("Emits an event when burger menu is clicked", () => {
        wrapper.find("#burger").trigger("click");
        expect(wrapper.emitted("toggleMenu")).toBeTruthy();
    });

    it("Change the icon of burger when is clicked", () => {
        const burger = wrapper.find("#burger");
        burger.trigger("click");
        expect(burger.classes("is-active")).toBe(true);

        burger.trigger("click");
        expect(burger.classes("is-active")).toBe(false);
    });

    it("Snapshot Test", () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
