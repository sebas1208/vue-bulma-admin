<template>
    <div>
        <nav class="navbar is-black is-spaced" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>
            </div>
        </nav>
        <br>
        <aside class="menu">
            <ul class="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Customers</a></li>
                <li><a>Dashboard</a></li>
                <li><a>Dashboard</a></li>
                <li><a>Dashboard</a></li>
            </ul>
        </aside>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {
    constructor() {
        super();
    }
}
</script>