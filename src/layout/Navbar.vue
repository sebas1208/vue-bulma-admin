<template>
    <nav class="navbar is-dark is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a id="burger" @click="toogleMenu()" :class="{ 'is-active': isActive }" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
    public isActive = false;

    constructor() {
        super();
    }

    public toogleMenu() {
        this.isActive = !this.isActive;
        this.$emit("toggleMenu", this.isActive);
    }
}
</script>