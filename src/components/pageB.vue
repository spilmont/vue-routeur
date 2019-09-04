<template>
    <div>
    <div>page B</div>
        <ul>
            <router-link :to="{name: 'b.a'}">Page A</router-link>
            <router-link :to="{name: 'b.c'}">Page C</router-link>
        </ul>
        <h1>sous Vue</h1>
        <transition name="bounce" mode="out-in">
            <router-view></router-view>
        </transition>

    </div>
</template>

<script>
export default {
  name: 'pageB'
}
</script>

<style scoped>

</style>
