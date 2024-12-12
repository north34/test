<script>
import LogoIcon from '@/ui/icons/Logo.vue';
import UIButton from '@/ui/button/index.vue';
import SearchBar from '@/components/SearchBar/index.vue';
import ArrowBackIcon from '@/ui/icons/ArrowBack.vue';

export default {
    components: {
        ArrowBackIcon,
        LogoIcon,
        UIButton,
        SearchBar,
    },
};
</script>

<template>
    <header>
        <div class="logo">
            <LogoIcon />
            <span>Логотип</span>
        </div>

        <UIButton class="catalog">Каталог</UIButton>

        <ArrowBackIcon class="go-back" />

        <SearchBar />

        <ul class="menu">
            <li><div class="link">Информация о компании</div></li>
            <li><div class="link">Контакты</div></li>
            <li><div class="link">Полезные ссылки</div></li>
        </ul>
    </header>
</template>

<style scoped lang="scss">
@use 'style';
</style>