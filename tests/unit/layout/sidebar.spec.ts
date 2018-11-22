import { shallowMount, mount, Wrapper } from "@vue/test-utils";
import Sidebar from "@/layout/Sidebar.vue";


describe("Sidebar Test", () => {
    let wrapper: Wrapper<Sidebar>;

    beforeEach(() => {
       wrapper = shallowMount(Sidebar);
    });

    it("Test Sidebar Mount", () => {
        expect(wrapper.html()).toContain("General");
    });

    it("SnapshotTest", () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
