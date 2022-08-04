<template>
    <div class="login">
        <img src="@/assets/logo.gif"
             alt="logo"
             class="xhb-logo">
        <h2 class="title"> This is Login</h2>
        <van-button type="primary"
                    @click="mockLogin">MOCK LOGIN</van-button>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    computed: {
        count() {
            return this.$store.getters.count
        }
    },
    created() {},
    mounted() {},
    methods: {
        async mockLogin() {
            await this.$store.dispatch('user/login')
            this.$router.replace('/').catch(() => '')
        }
    }
}
</script>
<style scoped lang="scss">
.login {
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