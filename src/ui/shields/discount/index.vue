<template>
    <span class="discount">
        <slot />
    </span>
</template>

<style scoped lang="scss">
.discount {
    width: fit-content;
    background: $color-brand;
    color: $color-white;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    padding: 9px 10px;
    border-radius: 4px;
}
</style>