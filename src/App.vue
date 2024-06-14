<template>
  <div
    class="fixed z-10 top-0 right-0 bottom-0 left-0 bg-[url('/pattern2.jpg')] bg-cover"
  ></div>
  <div class="fixed top-0 right-0 bottom-0 left-0 z-50">
    <router-view v-slot="{ Component }">
      <Transition name="bounce">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
