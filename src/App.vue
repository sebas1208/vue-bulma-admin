<template>
    <div id="app">
        <div class="sidebar is-fullHeight" v-show="!isMobile || isMobileMenuOpen"
            :class="{'sidebar-mobile': isMobile, 'translate-left-sidebar': isMobileMenuOpen}">
            <Sidebar />
        </div>
        <div class="is-fullHeight" 
            :class="{
                main : !isMobile || !isMobileMenuOpen, 
                'translate-left': isMobileMenuOpen
            }">

            <NavBar @toggleMenu="toggleMobileMenu($event)" />

            <div class="main-content">
                <Dashboard></Dashboard>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/layout/Navbar.vue";
import Sidebar from "@/layout/Sidebar.vue";

import Dashboard from "@/views/Dashboard.vue";

@Component({
    components: {
        NavBar,
        Sidebar,
        Dashboard,
    },
})
export default class App extends Vue {
    public isMobile = false;
    public isMobileMenuOpen = false;
    public width = window.innerWidth;

    constructor() {
        super();
    }

    public created() {
        const dWindowSize = this.debounced(50, this.windowSize);
        window.addEventListener("resize", dWindowSize);
        this.windowSize();
    }

    public destroyed() {
        window.removeEventListener("resize", this.windowSize);
    }

    public toggleMobileMenu(isOpen: boolean) {
        this.isMobileMenuOpen = isOpen;
    }

    public windowSize(event?: any) {
        this.width = event !== undefined ? event.target.innerWidth : window.innerWidth;
        this.checkMobile(this.width);
    }

    public debounced(delay: number, fn: (...args: any[]) => any) {
        let timerId: any;
        return (...args: any[]) => {
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                fn(...args);
                timerId = null;
            }, delay);
        };
    }

    private checkMobile(width: number) {
        this.isMobile = width < 1088;
        this.isMobileMenuOpen = this.isMobile ? this.isMobileMenuOpen : false;
    }
}
</script>


<style lang="scss">
html {
    height: 100%;
}

body {
    height: 100%;
    min-height: 100%;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    min-height: 100%;
    overflow-x: hidden;
}

.is-fullHeight {
    height: 100%;
    min-height: 100%;
}

.sidebar {
    position: fixed;
    left: 0;
    width: 250px;
    z-index: 50;
}

.sidebar-mobile {
    right: 0;
    left: initial;
}

.main {
    position: relative;
    left: 250px;
    width: calc(100% - 250px);
}

.main-content {
    margin-top: 75px;
}

.translate-left {
    animation: move-main 0.5s;
    animation-fill-mode: forwards;
}

.translate-left-sidebar {
    animation: move-sidebar 0.5s;
    animation-fill-mode: forwards;
}

@keyframes move-main {
    from {
        transform: translateX(0);
    };
    to {
        transform: translateX(-250px);
    }
}

@keyframes move-sidebar {
    from {
        transform: translateX(250px);
    };
    to {
        transform: translateX(0px);
    }
}
</style>
