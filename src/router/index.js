import { createWebHistory, createRouter } from "vue-router";

import ListHadiah from "../pages/ListHadiah.vue";
import Undian from "../pages/Undian.vue";

const routes = [
  { path: "/list-hadiah", component: ListHadiah, name: "ListHadiah" },
  { path: "/", component: Undian, name: "Undian" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const hadiahTerpilih = localStorage.getItem("hadiah-terpilih");
  if (!hadiahTerpilih || hadiahTerpilih == "") {
    if (to.name !== "ListHadiah") {
      return { name: "ListHadiah" };
    }
  }
});

export default router;
