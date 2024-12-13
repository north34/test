<script setup>
defineProps({
    label: { type: String, default: '' },
    counter: { type: [ String, Number ], default: '' },
});

const checked = defineModel();
</script>

<template>
    <label>
        <input type="checkbox" :checked />
        <span class="text" v-if="label" v-text="label" />
        <span class="counter" v-if="counter" v-text="counter" />
    </label>
</template>

<style scoped lang="scss">
label {
    display: flex;
    align-items: center;

    input[type=checkbox] {
        margin: unset;
        width: 20px;
        height: 20px;

        appearance: none;
        border: 1px solid $color-border;
        border-radius: 3px;

        transition: border .2s, background-color .2s;

        &:checked {
            border-color: $color-brand;
            background-color: $color-brand;

            &::after {
                content: '';
                background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMSAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNzEyMzMgMS4yMTI2MUM4Ljg4ODQyIDEuMDQ0OTcgOS4xMjI3NCAwLjk1MjI4OSA5LjM2NTg1IDAuOTU0MTI4QzkuNjA4OTcgMC45NTU5NjggOS44NDE4NiAxLjA1MjE4IDEwLjAxNTQgMS4yMjI0NkMxMC4xODg5IDEuMzkyNzUgMTAuMjg5NSAxLjYyMzc5IDEwLjI5NTkgMS44NjY4MkMxMC4zMDI0IDIuMTA5ODYgMTAuMjE0MSAyLjM0NTg5IDEwLjA0OTggMi41MjUxMUw1LjA2MjMzIDguNzYyNjFDNC45NzY1NyA4Ljg1NDk4IDQuODczMDYgOC45MjkxMSA0Ljc1OCA4Ljk4MDU2QzQuNjQyOTMgOS4wMzIwMiA0LjUxODY3IDkuMDU5NzQgNC4zOTI2NCA5LjA2MjA4QzQuMjY2NjIgOS4wNjQ0MSA0LjE0MTQyIDkuMDQxMzEgNC4wMjQ1MyA4Ljk5NDE1QzMuOTA3NjMgOC45NDY5OSAzLjgwMTQ1IDguODc2NzQgMy43MTIzMyA4Ljc4NzYxTDAuNDA0ODMxIDUuNDgwMTFDMC4zMTI3MjIgNS4zOTQyOCAwLjIzODg0NSA1LjI5MDc4IDAuMTg3NjA1IDUuMTc1NzhDMC4xMzYzNjUgNS4wNjA3OCAwLjEwODgxMiA0LjkzNjY0IDAuMTA2NTkxIDQuODEwNzZDMC4xMDQzNyA0LjY4NDg4IDAuMTI3NTI2IDQuNTU5ODQgMC4xNzQ2NzggNC40NDMxMUMwLjIyMTgyOSA0LjMyNjM3IDAuMjkyMDEgNC4yMjAzMyAwLjM4MTAzMyA0LjEzMTMxQzAuNDcwMDU3IDQuMDQyMjggMC41NzYwOTkgMy45NzIxIDAuNjkyODM0IDMuOTI0OTVDMC44MDk1NjkgMy44Nzc4IDAuOTM0NjA2IDMuODU0NjQgMS4wNjA0OCAzLjg1Njg3QzEuMTg2MzYgMy44NTkwOSAxLjMxMDUgMy44ODY2NCAxLjQyNTUgMy45Mzc4OEMxLjU0MDUgMy45ODkxMiAxLjY0NCA0LjA2MyAxLjcyOTgzIDQuMTU1MTFMNC4zNDczMyA2Ljc3MTM2TDguNjg4NTggMS4yNDAxMUM4LjY5NjQgMS4yMzA0OCA4LjcwNDc0IDEuMjIxMyA4LjcxMzU4IDEuMjEyNjFIOC43MTIzM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==') no-repeat center;
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }

    &:hover {
        input[type=checkbox] {
            border-color: $color-brand;
        }
    }

    .text {
        margin-left: 12px;
    }

    .counter {
        margin-left: auto;
        margin-right: 8px;
        color: $color-font-second;
        font-size: 12px;
    }
}
</style>
