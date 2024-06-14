<template>
  <div class="p-4">
    <h1 class="text-white font-extrabold text-7xl text-center">
      HADIAH TERSEDIA
    </h1>
    <div class="max-w-[720px] mx-auto mt-6 rounded-xl glass-container p-8">
      <div
        class="grid grid-cols-12 gap-8 h-[calc(100vh-206px)] overflow-y-auto"
      >
        <div
          v-for="item in hadiah"
          class="col-span-6 bg-white rounded-lg p-4 flex gap-y-2 flex-col"
        >
          <div
            class="w-full h-[225px] bg-cover bg-center border rounded"
            :class="item.image"
          ></div>
          <h4 class="font-medium text-slate-700">{{ item.name }}</h4>
          <button
            @click="onPilihHadiah(item)"
            class="bg-rose-500 hover:bg-rose-600 text-rose-50 font-semibold w-full rounded py-1.5 text-center focus:outline-none"
          >
            UNDI SEKARANG
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import router from "../router";
const hadiah = ref([
  {
    id: 1,
    name: "Kulkas 2 Pintu",
    image: "bg-[url('/hadiah1.jpg')]",
  },
  {
    id: 2,
    name: "Panci 1 Set",
    image: "bg-[url('/hadiah2.jpg')]",
  },
  {
    id: 3,
    name: "Motor Listrik",
    image: "bg-[url('/hadiah3.jpg')]",
  },
  {
    id: 4,
    name: "Sepeda Gunung",
    image: "bg-[url('/hadiah4.jpeg')]",
  },
  {
    id: 5,
    name: "Kompor",
    image: "bg-[url('/hadiah5.jpg')]",
  },
]);

const onPilihHadiah = (obj) => {
  const stringObj = JSON.stringify(obj);

  localStorage.setItem("hadiah-terpilih", stringObj);
  router.push({ name: "Undian" });
};
</script>
