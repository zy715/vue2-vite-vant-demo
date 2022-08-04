<template>
    <div class="about">
        <img src="@/assets/logo.gif"
             alt="logo"
             class="xhb-logo">
        <h2 class="title"> This is About</h2>
        <nav class="router">
            <router-link to="/">Back Home!</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>
<style scoped lang="scss">
.about {
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
    .router {
        padding: 10px 0;
        a {
            color: #477dfd;
            text-decoration: underline;
        }
    }
}
</style>