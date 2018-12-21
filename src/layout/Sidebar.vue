<template>
    <div class="cdm-sidebar" :class="{'is-mobile': isMobile && isMobileMenuOpen}">
        <nav class="navbar is-dark is-spaced has-border-bottom" :class="{'is-spaced-mobile': isMobile}" role="navigation"
            aria-label="main navigation">

            <div class="navbar-brand">
                <a href="https://bulma.io">
                    <img src="https://bulma.io/images/made-with-bulma--dark.png" alt="Made with Bulma" width="180" height="100">
                </a>
            </div>
        </nav>
        <section class="is-fullheight cmd-sidebar-menu">
            <aside class="menu">
                <ul class="menu-list">
                    <li class="menu-item">
                        <router-link to="/dashboard">
                            <span class="icon is-large">
                                <i class="fas fa-2x fa-home">
                                </i>
                            </span>
                            Dashboard
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/tables">
                            <span class="icon is-large">
                                <i class="fas fa-2x fa-table"></i>
                            </span>
                            Tables
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/component">
                            <span class="icon is-large">
                                <i class="fas fa-2x fa-book"></i>
                            </span>
                            Components
                        </router-link>
                    </li>
                </ul>
            </aside>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {

    @Prop(Boolean) isMobile!: boolean;
    @Prop(Boolean) isMobileMenuOpen!: boolean;

    constructor() {
        super();
    }
}
</script>
<style lang="scss" scoped>
@import '@/_variables.scss';

.cdm-sidebar {
    background-color: $dark;
    width: $sidebar-width;
    padding-left: 12px;
    padding-right: 12px;
    height: 100%;
}

.menu-item {
    margin-bottom: 20px;
}

.is-mobile {
    position: fixed;
    display: block;
    right: 0;
    left: auto;
    z-index: 10;
    visibility: visible;
    overflow-y: visible;
    border-top: none;
    text-align: left;
}

.cmd-sidebar-menu {
    padding-top: 24px;
}
</style>
