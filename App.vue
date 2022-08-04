<template>
    <div id="app">
        <transition name="fade"
                    mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="fade"
                    mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'app',

    data() {
        return {}
    },

    mounted() {},

    methods: {}
}
</script>
<style lang="scss" scoped>
#app {
    max-width: 10rem;
    height: 100vh;
    overflow-y: scroll;
    margin: auto;
    background-color: #fafafa;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 24px;
}
.fade-enter-active {
    transition: all 0.2s ease;
}
.fade-leave-active {
    transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>