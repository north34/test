<template>
    <span class="badge">
        <slot />
    </span>
</template>

<style scoped lang="scss">
.badge {
    background: var(--color-white);
    padding: 6px 8px;
    width: fit-content;
    border: 1px solid #F2F2F2;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}
</style>