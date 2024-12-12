<script>
import categories from '@/data/categories.js';
import brands from '@/data/brands.js';
import sizes from '@/data/sizes.js';

import FilterItem from './item.vue';
import Category from './blocks/category.vue';
import Prices from './blocks/prices.vue';

import UICheckboxList from '@/ui/checkbox/list.vue';

export default {
    components: { FilterItem, Category, UICheckboxList, Prices },
    data: () => ({ categories, brands, sizes }),
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

        <FilterItem title="Цена">
            <Prices />
        </FilterItem>

        <FilterItem title="Бренд">
            <UICheckboxList :items="brands" />
        </FilterItem>

        <FilterItem title="Размер">
            <UICheckboxList :items="sizes" />
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

    @media (min-width: 1144px) {
        &.--sticky {
            background: white;
            z-index: 1;
            position: sticky;
            top: 96px;
            height: 100%;
        }
    }

    @media (max-width: 1144px) {
        &>* {
            display: none;
        }

        .category-mobile {
            display: block;
        }
    }
}
</style>