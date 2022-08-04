<template>
    <div class="home">
        <img src="@/assets/logo.gif"
             alt="logo"
             class="xhb-logo">

        <h2 class="title"> <span>This is home</span></h2>

        <nav class="router-wrap">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>

        <van-button type="primary"
                    @click="mockLogOut">MOCK LOGOUT</van-button>
        <br>
        <van-button type="info"
                    @click="getPet"
                    class="requset-test"> REQUEST TEST</van-button>
        <br>
        <van-cell-group inset
                        class="mode-info">
            <van-cell title="环境"
                      :value=MODE />
            <van-cell title="SOME_KEY"
                      :value=SOME_KEY />
        </van-cell-group>
    </div>
</template>
<script>
import { Toast } from 'vant'
import { getPet } from '@/api/base.js'
export default {
    data() {
        return {
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(2021, 0, 17),
            MODE: import.meta.env.MODE,
            SOME_KEY: import.meta.env.VITE_SOME_KEY
        }
    },
    computed: {
        count() {
            return this.$store.getters.count
        }
    },
    async created() {},
    mounted() {
        Toast('WELOCME TO XHB')
    },
    components: {
        [Toast.name]: Toast
    },
    methods: {
        async mockLogOut() {
            try {
                await this.$store.dispatch('user/logout')
                location.reload()
            } catch (error) {
                oast.fail(error)
            }
        },
        async getPet() {
            try {
                let res = await getPet({ id: 1 })
                console.log(res)
            } catch (error) {
                Toast.fail(error)
            }
        }
    }
}
</script>
<style scoped lang="scss">
.home {
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
    .router-wrap {
        padding: 20px 0;
        a {
            color: #477dfd;
            text-decoration: underline;
        }
    }
    .requset-test {
        margin-top: 20px;
    }
    .mode-info {
        text-align: left;
        margin-top: 30px;
    }
}
</style>