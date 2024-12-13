<template>
    <button>
        <slot />
    </button>
</template>

<style scoped lang="scss">
button {
    width: fit-content;
    background: $color-white;
    color: $color-brand;
    border: 1px solid $color-brand;
    padding: 12px 16px;
    border-radius: 4px;
    transition: all .2s ease-out;
    cursor: pointer;
    font-weight: 700;

    &:hover {
        background: $color-brand;
        color: $color-white;
    }
}
</style>