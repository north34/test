<script>
export default {
    props: {
        color: { type: String, default: '#D5D5D5' },
    },
};
</script>

<template>
    <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="10" height="1" :fill="color"/>
    </svg>
</template>
