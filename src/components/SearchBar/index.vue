<script>
import UIButton from '@/ui/button/index.vue';
import UIInput from '@/ui/input/index.vue';
import CloseCircleIcon from '@/ui/icons/CloseCircle.vue';
import SearchIcon from '@/ui/icons/SearchBig.vue';
import ArrowBackIcon from '@/ui/icons/ArrowBack.vue';

export default {
    components: { SearchIcon, CloseCircleIcon, UIButton, UIInput, ArrowBackIcon },
    data() {
        return {
            searchText: '',
        }
    },
};
</script>

<template>
    <UIInput
        class="search"
        placeholder="Поиск по 100 000 товаров"
        v-model="searchText"
    >
        <template #before>
            <SearchIcon class="search-icon" />
        </template>

        <template #after>
            <div class="search-actions" v-if="searchText">
                <CloseCircleIcon @click="searchText = ''" />
                <UIButton>Найти</UIButton>
            </div>
        </template>
    </UIInput>
</template>

<style scoped lang="scss" src="./style.scss" />