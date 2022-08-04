<template>
    <div class="err-404">
        <img src="@/assets/logo.gif"
             alt="logo"
             class="xhb-logo">
        <h2 class="title"> This is Error 404</h2>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    created() {},
    mounted() {}
}
</script>
<style scoped lang="scss">
.err-404 {
    padding-top: 30px;
    text-align: center;
    .xhb-logo {
        width: 100px;
    }
    .title {
        font-size: 30px;
        font-weight: 500;
        padding: 10px 0;
    }
}
</style>