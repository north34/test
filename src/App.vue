<script>
import products from '@/data/products.js';
import Header from '@/components/Header/index.vue';
import Filters from '@/components/Filters/index.vue';
import ProductCard from '@/components/ProductCard/index.vue';

export default {
    components: { Header, Filters, ProductCard },
    data: () => ({ products }),
}
</script>

<template>
    <Header class="--sticky" />

    <main>
        <Filters class="--sticky" />

        <section class="content">
            <ProductCard
                v-for="(product, idx) of products"
                :item="product"
                :key="idx"
            />
        </section>
    </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    gap: 36px;
    margin-bottom: 36px;

    .filters {
        width: 280px;
    }

    .content {
        flex: 1;
        display: grid;
        gap: 32px;
        grid-template-columns: repeat(auto-fit, minmax(min(100%/2, max(200px, 100%/5)), 1fr));
    }

    @media (max-width: 768px) {
        margin-bottom: 16px;

        .content {
            gap: 12px;
        }
    }

    @media (max-width: 1144px) {
        gap: unset;
        flex-direction: column;
    }
}
</style>
