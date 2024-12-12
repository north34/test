<script>
import DividerIcon from '@/ui/icons/Divider.vue';
import UIPriceInput from '@/components/Filters/ui/PriceInput.vue';

export default {
    components: { UIPriceInput, DividerIcon }
};
</script>

<template>
    <div class="price">
        <UIPriceInput
            label="от"
            value="5 500 ₽"
        />

        <DividerIcon />

        <UIPriceInput
            label="до"
            value="15 500 ₽"
        />
    </div>
</template>

<style scoped lang="scss">
.price {
    position: relative;
    display: flex;
    gap: 42px;

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        //left: calc(50% - 10px / 2);
    }
}
</style>