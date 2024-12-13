<script setup>
import UIInput from '@/ui/input/index.vue';

defineProps({
    label: { type: String, default: '' },
});

const inputText = defineModel();
</script>

<template>
    <UIInput v-model="inputText">
        <template #before>
            <span v-text="label" />
        </template>
    </UIInput>
</template>

<style scoped lang="scss">
label {
    padding: 0 4px 0 26px;

    span {
        position: absolute;
        top: 11px;
        left: 8px;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        color: $color-font-second;
    }
}
</style>