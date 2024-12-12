<script setup>
import Category from '@/components/Filters/blocks/category.vue';

defineProps({
    item: { required: true },
    depth: { default: 0 },
});
</script>

<template>
    <div class="category">
        <div class="info" :style="{ 'padding-left': `${depth * 16 + 8}px`, '--active': item.active }">
            <div class="name" v-text="item.name" />
            <div class="counter" v-if="item.counter" v-text="item.counter" />
        </div>

        <div class="children" v-if="item.children">
            <Category
                v-for="(category, idx) of item.children"
                :key="idx"
                :item="category"
                :depth="depth + 1"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.category {
    display: flex;
    flex-direction: column;

    .info {
        display: flex;
        background: white;
        cursor: pointer;
        transition: background-color .2s;
        padding: 7px 8px;
        border-radius: 5px;

        &:hover {
            background: var(--color-font-bg);
        }
    }

    .counter {
        margin-left: auto;
        margin-right: 8px;
        color: var(--color-font-second);
        font-size: 12px;
    }
}
</style>