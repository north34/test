<script setup>
const inputText = defineModel();

defineProps({
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
});
</script>

<template>
    <label>
        <slot name="before" />

        <input :type :placeholder v-model="inputText" />

        <slot name="after" />
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
}
</style>