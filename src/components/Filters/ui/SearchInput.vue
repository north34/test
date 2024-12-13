<script setup>
import SearchIcon from '@/ui/icons/Search.vue';
import CloseCircleIcon from '@/ui/icons/CloseCircle.vue';
import UIInput from '@/ui/input/index.vue';

const searchText = defineModel();
</script>

<template>
    <UIInput type="text" placeholder="Поиск" v-model="searchText">
        <template #before>
            <SearchIcon class="search-icon" />
        </template>

        <template #after>
            <CloseCircleIcon v-if="searchText" @click="searchText = ''" />
        </template>
    </UIInput>
</template>

<style scoped lang="scss">
.search-icon {
    flex-shrink: 0;
    margin-right: 8px;
}
</style>