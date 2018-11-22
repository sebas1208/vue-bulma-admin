<template>
    <div>
        <div class="columns">
            <div class="column">Column 1</div>
            <div class="column">Column 2</div>
            <div class="column">Column 3</div>
        </div>
        <div class="columns">
            <div class="column">Column 1</div>
            <div class="column">Column 2</div>
            <div class="column">Column 3</div>
        </div>
        <div class="columns">
            <div class="column">Column 1</div>
            <div class="column">Column 2</div>
            <div class="column">Column 3</div>
        </div>
        <div class="columns">
            <div class="column">Column 1</div>
            <div class="column">Column 2</div>
            <div class="column">Column 3</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Dashboard extends Vue {
    constructor() {
        super();
    }
}
</script>
