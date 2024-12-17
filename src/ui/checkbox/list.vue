<script setup>
import UICheckbox from '@/ui/checkbox/index.vue';
import UISearchInput from '@/ui/input/search.vue';

const items = defineModel('items', { type: Array, required: true });
const searchInput = defineModel('search');
</script>

<template>
    <div>
        <UISearchInput
            class="search-input"
            v-if="items?.length > 6"
            v-model="searchInput"
        />

        <div class="list">
            <UICheckbox
                v-for="(item, idx) of items"
                :key="idx"
                :label="item.label"
                :counter="item.counter"
                v-model="item.checked"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 180px;
    overflow-y: scroll;

    @include custom-scrollbar();
}

.search-input {
    margin-bottom: 16px;
}
</style>