<template>
    <div class="home">
        <HelloWorld></HelloWorld>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
    components: {
        HelloWorld,
    },
})
export default class Home extends Vue {
    constructor() {
        super();
        console.log("Constructor");
    }
}
</script>
