<script setup>
import BoxIcon from '@/ui/icons/Box.vue';
import FireIcon from '@/ui/icons/Fire.vue';
import UIBadgeShield from '@/ui/shields/badge/index.vue';
import UIDiscountShield from '@/ui/shields/discount/index.vue';
import UIButton from '@/ui/button/index.vue';
import UICardTitle from './ui/Title/index.vue';
import UICardPrice from './ui/Price/index.vue';

defineProps({
    item: { required: true },
});
</script>

<template>
    <article class="product-card" :class="{ '--unavailable': item.unavailable }">
        <div class="head">
            <BoxIcon class="image" />

            <UIBadgeShield v-if="item.hit">
                <span>Хит продаж</span>
                <FireIcon />
            </UIBadgeShield>

            <UIDiscountShield
                v-if="item.discount"
                v-text="item.discount"
            />
        </div>

        <UICardTitle
            :name="item.name"
            :brand="item.brand"
        />

        <UICardPrice
            :price="item.price"
            :full-price="item.fullPrice"
        />

        <UIButton>{{ !item.unavailable ? 'Купить' : 'Сообщить о поступлении' }}</UIButton>
    </article>
</template>

<style scoped lang="scss" src="./style.scss" />