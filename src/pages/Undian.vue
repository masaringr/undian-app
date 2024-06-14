<template>
  <div class="flex justify-center items-center p-8 h-full">
    <div class="max-w-[480px] w-full rounded-xl glass-container p-8">
      <div v-if="hadiahTerpilih !== null" class="relative">
        <div class="col-span-6 bg-white rounded-lg p-4 flex gap-y-2 flex-col">
          <div
            class="w-full h-[325px] bg-cover bg-center rounded border"
            :class="hadiahTerpilih.image"
          ></div>
          <h4 class="font-medium text-slate-700">
            {{ hadiahTerpilih.name }}
          </h4>
          <div class="border-t border-blue-900/50 border-dashed pt-4 mt-2">
            <label for="jml-pemenang" class="text-slate-500 mb-1 block"
              >Jumlah Pemenang</label
            >
            <input
              type="number"
              id="jml-pemenang"
              placeholder="Cth : 10"
              class="w-full border border-slate-200 rounded-md focus:outline-none px-3 py-1.5"
            />
          </div>
          <div class="flex gap-2">
            <button
              @click="ubahHadiah"
              class="w-[175px] flex gap-x-1 justify-center items-center bg-slate-200 hover:bg-slate-300 text-slate-500 rounded py-1.5 focus:outline-none"
            >
              <IconReload
                :styles="{
                  color: 'text-slate-500',
                  width: '20px',
                  height: '20px',
                }"
              />
              Ubah
            </button>
            <button
              @click="mulaiUndian"
              class="w-full flex gap-x-1 justify-center items-center bg-blue-500 hover:bg-blue-600 text-blue-50 font-semibold rounded py-1.5 focus:outline-none"
            >
              <IconPlay
                :styles="{
                  color: 'text-blue-50',
                  width: '20px',
                  height: '20px',
                }"
              />
              Mulai Undian
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Transition name="bounce">
    <div v-show="isMulai" class="fixed top-0 right-0 bottom-0 left-0">
      <div
        class="w-full h-full bg-slate-700/50 flex justify-center items-center"
      >
        <div class="bg-white p-4 rounded-xl">
          <div class="w-[275px] mb-4">
            <img src="/undian.gif" alt="" class="w-full h-auto" />
          </div>
          <button
            @click="stopUndian"
            class="bg-rose-500 hover:bg-rose-600 w-full rounded-md py-1.5 flex justify-center items-center font-semibold gap-x-1 text-rose-50"
          >
            <IconStop
              :styles="{
                color: 'text-rose-50',
                width: '20px',
                height: '20px',
              }"
            />
            STOP
          </button>
        </div>
      </div>
    </div>
  </Transition>
  <Transition name="bounce">
    <div v-show="isStop" class="fixed top-0 right-0 bottom-0 left-0">
      <div
        class="w-full h-full bg-slate-700/50 flex justify-center items-center"
      >
        <div class="max-w-[480px] min-w-[325px] mx-auto">
          <div class="bg-white p-4 rounded-xl relative">
            <h4 class="font-bold text-xl text-slate-700">DAFTAR PEMENANG</h4>
            <div
              class="border rounded-md mb-4 mt-2 max-h-[calc(100vh-175px)] overflow-y-auto"
            >
              <ul>
                <li
                  v-for="(nama, idx) in daftarPemenang"
                  :class="idx != daftarPemenang.length - 1 ? 'border-b' : ''"
                  class="p-4 text-lg text-slate-700"
                >
                  {{ idx + 1 }}. {{ nama }}
                </li>
              </ul>
            </div>
            <button
              @click="finish"
              class="bg-emerald-500 hover:bg-emerald-600 w-full rounded-md py-1.5 flex justify-center items-center font-semibold gap-x-1 text-emerald-50"
            >
              <IconFinish
                :styles="{
                  color: 'text-emerald-50',
                  width: '20px',
                  height: '20px',
                }"
              />
              SELESAI
            </button>
            <div class="absolute top-0 right-0 bottom-[64px] left-0">
              <canvas id="confetti" class="w-full h-full"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import IconReload from "../components/icons/IconReload.vue";
import IconPlay from "../components/icons/IconPlay.vue";
import IconFinish from "../components/icons/IconFinish.vue";
import IconStop from "../components/icons/IconStop.vue";
import router from "../router";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

const hadiahTerpilih = ref(null);
const isMulai = ref(false);
const isStop = ref(false);
const daftarPemenang = ref([
  "Nama Satu",
  "Nama Lima",
  "Nama Tiga",
  "Nama Dua",
  "Nama Empat",
]);

const randomDirection = (min, max) => {
  return Math.random() * (max - min) + min;
};

const showConfetti = () => {
  const canvas = document.getElementById("confetti");

  canvas.confetti =
    canvas.confetti || confetti.create(canvas, { resize: true });

  canvas.confetti({
    angle: randomDirection(55, 125),
    spread: randomDirection(50, 70),
    particleCount: randomDirection(50, 100),
    origin: { y: 1 },
  });
};

const ubahHadiah = () => {
  router.go(-1);
};

const mulaiUndian = () => {
  isMulai.value = true;
};

const stopUndian = () => {
  isMulai.value = false;
  setTimeout(() => {
    isStop.value = true;
    setInterval(() => {
      showConfetti();
    }, 1000);
  }, 500);
};

const finish = () => {
  isStop.value = false;
  localStorage.removeItem("hadiah-terpilih");
  router.push({ name: "ListHadiah", replace: true });
};

onMounted(() => {
  const hadiah = localStorage.getItem("hadiah-terpilih");
  console.log("nilai hadiah : ", hadiah);
  hadiahTerpilih.value = JSON.parse(hadiah);
  console.log("nilai hadiah : ", hadiahTerpilih.value);
});
</script>
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
