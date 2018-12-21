<template>
    <div id="app">
        <div class="is-fullheight is-paddingless is-marginless">

            <div class="is-narrow is-paddingless sidebar-column" 
                :hidden="isMobile && !isMobileMenuOpen" 
                :class="{
                    'fix-padding-right': isMobile && isMobileMenuOpen, 
                    'sidebar-column-mobile': isMobile && isMobileMenuOpen, 
                    'translate-left-sidebar': isMobile && isMobileMenuOpen
                }">
                <Sidebar :is-mobile="isMobile" :is-mobile-menu-open="isMobileMenuOpen"/>
            </div>

            <div class="is-paddingless" 
                :class="{
                    'fix-padding-left': isMobile && isMobileMenuOpen,
                    'translate-left': isMobile && isMobileMenuOpen, 
                    'main-column': !isMobile
                }">
                <NavBar @toggleMenu="toggleMobileMenu()" 
                    :is-active="isMobileMenuOpen"
                    :is-mobile="isMobile" />
            </div>

        </div>
        <!-- <div class="sidebar is-fullHeight" v-show="!isMobile || isMobileMenuOpen"
            :class="{'sidebar-mobile': isMobile, 'translate-left-sidebar': isMobileMenuOpen}">
            
        </div>
        <div class="is-fullHeight" 
            :class="{
                main : !isMobile || !isMobileMenuOpen, 
                'translate-left': isMobileMenuOpen
            }">

            <div class="main-content">
                <Dashboard></Dashboard>
            </div>
        </div> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/layout/Navbar.vue";
import Sidebar from "@/layout/Sidebar.vue";
import Dashboard from "@/views/Dashboard.vue";
import widthHelper from "@/util/width-helper";

@Component({
    components: {
        NavBar,
        Sidebar,
        Dashboard,
    },
})
export default class App extends Vue {
    isMobile = false;
    isMobileMenuOpen = false;

    public width = window.innerWidth;

    constructor() {
        super();
    }

    created() {
        this.isMobile = widthHelper.isWidthMobile(window.innerWidth);
        const dWindowSize = this.debounced(100, this.windowSize);
        window.addEventListener("resize", dWindowSize);
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    destroyed() {
        window.removeEventListener("resize", this.windowSize);
    }

    windowSize(event?: any) {
        this.width = event !== undefined ? event.target.innerWidth : window.innerWidth;
        this.checkMobile(this.width);
    }

    debounced(delay: number, fn: (...args: any[]) => any) {
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
        console.log(width);
        this.isMobile = widthHelper.isWidthMobile(width);
        if (this.isMobile === false) {
            this.isMobileMenuOpen = false;
        }
    }
}
</script>


<style lang="scss">

@charset "utf-8";

// Import a Google Font
@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

@import '@/_variables.scss';

// Import only what you need from Bulma
@import "../node_modules/bulma/bulma.sass";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    height: 100%;
    max-height: 100%;
    min-height: 100%;
}

.is-fullheight {
    height: 100%;
}

.has-border-bottom {
    border-bottom: 1px solid rgba(102,97,91,.3);
}

.sidebar-column {
    top: 0;
    bottom: 0;
    position: fixed;
}

.sidebar-column-mobile {
    right: 0;
}

.main-column {
    position: relative;
    left: $sidebar-width;
    width: calc(100% - #{$sidebar-width});
}

.main-content {
    margin: $gap;
}

.has-space-left {
    left: $sidebar-width !important;
}

.has-padding-top {
    padding-top: 100px;
}

.is-spaced-mobile {
    padding: 1rem 2rem;
}

.card {
    border-radius: 10px;
}

.user-image {
    padding-left: 15px;
}

.is-spaced {
    padding:  1rem 2rem;
}

</style>
