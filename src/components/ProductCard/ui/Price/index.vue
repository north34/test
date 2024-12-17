<script>
export default {
    props: {
        price: { type: String, default: '' },
        fullPrice: { type: String, default: '' },
    },
};
</script>

<template>
    <div class="price" v-if="price">
        {{ price }}

        <span
            class="full-price"
            v-if="fullPrice"
            v-text="fullPrice"
        />
    </div>
</template>

<style scoped lang="scss">
.price {
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;

    .full-price {
        color: $color-font-second;
        font-size: 12px;
        text-decoration: line-through;
        margin-left: 8px;
    }
}
</style>