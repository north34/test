<script>
import UICheckbox from '@/ui/checkbox/index.vue';
import SearchInput from '@/components/Filters/ui/SearchInput.vue';

export default {
    props: {
        items: { type: Array, required: true },
    },
    components: { SearchInput, UICheckbox },
};
</script>

<template>
    <div>
        <SearchInput v-if="items?.length > 6" />

        <div class="list">
            <UICheckbox
                v-for="(item, idx) of items"
                :key="idx"
                :label="item.label"
                :counter="item.counter"
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
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 100px;
        cursor: pointer;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-clip: content-box;
        border: 5px solid transparent;
        background-color: #CBCBCB;
    }
}

.search-input {
    margin-bottom: 16px;
}
</style>