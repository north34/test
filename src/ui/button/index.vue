<template>
    <button>
        <slot />
    </button>
</template>

<style scoped lang="scss">
button {
    width: fit-content;
    background: var(--color-white);
    color: var(--color-brand);
    border: 1px solid var(--color-brand);
    padding: 12px 16px;
    border-radius: 4px;
    transition: all .2s ease-out;
    cursor: pointer;
    font-weight: 700;

    &:hover {
        background: var(--color-brand);
        color: var(--color-white);
    }
}
</style>