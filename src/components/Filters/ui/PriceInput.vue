<script>
export default {
    props: {
        value: { type: String, default: '' },
        label: { type: String, default: '' },
    },
};
</script>

<template>
    <label>
        <span v-text="label" />
        <input type="text" :value />
    </label>
</template>

<style scoped lang="scss">
label {
    height: 36px;
    position: relative;
    outline: 1px solid #D5D5D5;
    border-radius: 4px;
    padding: 0 4px 0 26px;
    transition: outline-color .2s;
    display: flex;

    &:focus-within, &:hover {
        outline-color: #73AFF4;
    }

    span {
        position: absolute;
        top: 11px;
        left: 8px;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        color: var(--color-font-second);
    }

    input {
        width: 100%;
        border: none;
        outline: none;
    }
}
</style>