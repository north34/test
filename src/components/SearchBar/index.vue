<script>
import UIButton from '@/ui/button/index.vue';
import CloseCircleIcon from '@/ui/icons/CloseCircle.vue';
import SearchIcon from '@/ui/icons/Search.vue';
import ArrowBackIcon from '@/ui/icons/ArrowBack.vue';

export default {
    components: { SearchIcon, CloseCircleIcon, UIButton, ArrowBackIcon },
    data() {
        return {
            searchText: '',
        }
    },
};
</script>

<template>
    <label for="search" class="search">
        <SearchIcon class="search-icon" />

        <input
            type="text"
            placeholder="Поиск по 100 000 товаров"
            id="search"
            v-model="searchText"
        />

        <div class="search-actions" v-if="searchText">
            <CloseCircleIcon @click="searchText = ''" />
            <UIButton>Найти</UIButton>
        </div>
    </label>
</template>

<style scoped lang="scss">
@use 'style';
</style>