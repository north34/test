<script>
export default {
    props: {
        title: { type: String, required: true },
    },
};
</script>

<template>
    <div class="filter">
        <div class="header">
            <div class="title" v-text="title" />
            <button @click="$emit('clear')">Очистить</button>
        </div>

        <slot />
    </div>
</template>

<style scoped lang="scss">
.filter {
    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;

        .title {
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;
        }

        button {
            font-size: 12px;
            font-weight: 400;
            line-height: 12px;
            text-decoration: underline;
            cursor: pointer;
            color: $color-font-second;
            transition: color .2s;

            background: none;
            border: none;

            &:hover {
                color: $color-font-main;
            }
        }
    }
}
</style>