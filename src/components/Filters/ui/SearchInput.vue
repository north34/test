<script>
import SearchIcon from '@/ui/icons/SearchMobile.vue';
import CloseCircleIcon from '@/ui/icons/CloseCircle.vue';

export default {
    components: { CloseCircleIcon, SearchIcon },
    data() {
        return {
            searchText: '',
        }
    },
};
</script>

<template>
    <label class="search-input">
        <SearchIcon class="search-icon" />

        <input type="text" placeholder="Поиск" v-model="searchText" />

        <CloseCircleIcon v-if="searchText" @click="searchText = ''" />
    </label>
</template>

<style scoped lang="scss">
label {
    height: 36px;
    position: relative;
    outline: 1px solid #D5D5D5;
    border-radius: 4px;
    padding: 0 8px 0 12px;
    transition: outline-color .2s;
    display: flex;
    align-items: center;

    &:focus-within, &:hover {
        outline-color: #73AFF4;
    }

    input {
        width: 100%;
        border: none;
        outline: none;
    }

    .search-icon {
        flex-shrink: 0;
        margin-right: 8px;
    }
}
</style>