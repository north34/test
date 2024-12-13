<script setup>
import { ref } from 'vue';

import categories from '@/data/categories.js';
import brands from '@/data/brands.js';
import sizes from '@/data/sizes.js';

import FilterItem from './item.vue';
import Category from './blocks/category.vue';
import Prices from './blocks/prices.vue';

import UICheckboxList from '@/ui/checkbox/list.vue';

const from = ref('5 500 ₽');
const to = ref('15 500 ₽');

const clearPrices = () => {
    from.value = '';
    to.value = '';
};
</script>

<template>
    <aside class="filters">
        <div class="category-mobile">Название категории</div>

        <div class="categories">
            <Category
                v-for="(category, idx) of categories"
                :key="idx"
                :item="category"
            />
        </div>

        <FilterItem title="Цена" @clear="clearPrices">
            <Prices
                v-model:from="from"
                v-model:to="to"
            />
        </FilterItem>

        <FilterItem title="Бренд">
            <UICheckboxList
                v-model:items="brands"
            />
        </FilterItem>

        <FilterItem title="Размер">
            <UICheckboxList
                v-model:items="sizes"
            />
        </FilterItem>
    </aside>
</template>

<style scoped lang="scss">
aside {
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 28px;

    .category-mobile {
        display: none;
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 12px;
    }

    @media (min-width: $breakpoint-desktop) {
        &.--sticky {
            background: white;
            z-index: 1;
            position: sticky;
            top: 96px;
            height: 100%;
        }
    }

    @media (max-width: $breakpoint-desktop) {
        &>* {
            display: none;
        }

        .category-mobile {
            display: block;
        }
    }
}
</style>