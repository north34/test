<script setup>
import DividerIcon from '@/ui/icons/Divider.vue';
import UIPriceInput from '@/components/Filters/ui/PriceInput.vue';

const from = defineModel('from');
const to = defineModel('to');
</script>

<template>
    <div class="price">
        <UIPriceInput
            label="от"
            v-model="from"
        />

        <DividerIcon />

        <UIPriceInput
            label="до"
            v-model="to"
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