<template>
  <div class="min-h-screen text-utama font-sans">
    <nav class="bg-white p-4 shadow-lg">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <img src="/logo.png" alt="WNM Logo" class="h-10 w-auto" />
        </div>

        <div class="flex gap-8">
          <router-link
            to="/"
            class="hover:text-cyan-400 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-slate-100"
            >Home</router-link
          >
          <router-link
            to="/login"
            class="hover:text-purple-400 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-slate-100"
            >Login</router-link
          >
        </div>
      </div>
    </nav>

    <main class="w-full max-w-[95%] xl:max-w-[1400px] mx-auto mt-10 p-4">
      <router-view></router-view>
    </main>
  </div>
</template>