<template>
<nav class="navbar has-shadow is-light is-spaced" role="navigation" aria-label="main navigation"
    :class="{'is-spaced-mobile': isMobile}">

    <div class="navbar-brand">
        <a role="button" 
            :class="{'is-active': isActive}" 
            class="navbar-burger burger is-active" 
            @click="toogleMenu"
            aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div class="navbar-menu">

        <div class="navbar-start">
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href="#">Admin</a></li>
                    <li><a href="#">Home</a></li>
                    <li class="is-active"><a href="#" aria-current="page">Dashboard</a></li>
                </ul>
            </nav>
        </div>

        <div class="navbar-end">

            <!-- <cdm-dropdown [title]="'10 Notifications'">
                <a class="navbar-item">
                    Notificaction
                </a>
                <a class="navbar-item">
                    Notificaction
                </a>
                <a class="navbar-item">
                    Notificaction
                </a>
            </cdm-dropdown> -->

            <div class="user-image">
                <div class="navbar-item has-dropdown is-hoverable">
                    <!-- <a (click)="toggleUser()">
                        <figure class="image is-48x48">
                            <img class="is-rounded" src="https://picsum.photos/48/48">
                        </figure>
                    </a> -->

                    <div class="navbar-dropdown is-right">
                        <a class="navbar-item">
                            <span class="icon">
                                <i class="fa fa-user"></i>
                            </span>
                            <a>
                                Profile
                            </a>
                        </a>
                        <a class="navbar-item">
                            <span class="icon">
                                <i class="fa fa-cog"></i>
                            </span>
                            <div>
                                Settings
                            </div>
                        </a>
                        <a class="navbar-item">
                            <span class="icon">
                                <i class="fas fa-sign-out-alt"></i>
                            </span>
                            <div>Logout</div>
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {

    @Prop(Boolean) isActive!: boolean;
    @Prop(Boolean) isMobile!: boolean;

    constructor() {
        super();
    }

    toogleMenu() {
        this.$emit("toggleMenu");
    }
}
</script>