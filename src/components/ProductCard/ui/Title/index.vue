<script>
export default {
    props: {
        name: { type: String, required: true },
        brand: { type: String, required: true },
    },
};
</script>

<template>
    <div class="title">
        <div class="brand-name lines-cutter" v-text="brand" />
        <div class="name lines-cutter" :style="{ '--lines': 3 }" v-text="name" />
    </div>
</template>

<style scoped lang="scss">
.title {
    .brand-name {
        color: var(--color-font-second);
        margin-bottom: 8px;
        line-height: 16px;
    }

    .name {
        cursor: pointer;
        line-height: 16px;
        transition: color .2s;

        &:hover {
            color: var(--color-font-cover);
        }
    }
}
</style>