<template>
  <div id="app">
      <div class="ui fixed inverted menu">
          <div class="ui container">
            <router-link :to="{name: 'root'}" class="header item">Accueil</router-link>
            <router-link :to="{name: 'A',  params: {id: 1}}" class="item">Page A1</router-link>
              <router-link :to="{name: 'B'}" class="item">Page B</router-link>
              <router-link :to="{name: 'D'}" class="item">Page D</router-link>
          </div>
      </div>
      <div class="sidebar">
          <h1>sidebar</h1>
          <router-view name="sidebar"></router-view>
      </div>
      <div class="main">
          <h1>main</h1>
          <transition name="bounce" mode="out-in">
              <router-view></router-view>
          </transition>

      </div>

  </div>
</template>

<script>

export default {
}
</script>

<style>
#app {

}
.bounce-enter-active {
    animation: bounce-in .5s;
}
.bounce-leave-active {
    animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
