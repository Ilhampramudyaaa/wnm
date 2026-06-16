import { createRouter, createWebHistory } from "vue-router";

// 1. Panggil file halaman yang tadi kita buat
import Home from "./views/home.vue";
import Login from "./views/Login.vue";

// 2. Buat aturan URL-nya
const routes = [
  { path: "/", component: Home }, // Jika URL kosong (localhost:5173/), buka Home
  { path: "/login", component: Login }, // Jika URL /login, buka Login
];

// 3. Rakit routernya
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
