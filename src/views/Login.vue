<template>
  <div class="bg-wbg px-10 py-40 rounded-2xl text-center flex flex-col md:flex-row items-center gap-12">
    
    <div class="w-full">
    <h1 class="text-4xl font-bold text-utama mb-4">Login</h1>
    <form class="flex flex-col gap-4">
        
      <input
        type="email"
        placeholder="Email"
        class="p-3 rounded-full bg-white text-black w-full outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        class="p-3 rounded-full bg-white text-black w-full outline-none"
      />

      <button
        class="bg-utama hover:bg-utama/80 text-white font-semibold py-3 px-6 rounded-full w-full transition-colors duration-200 shadow-blue-500/30 shadow-lg mt-2"
      >
        Masuk
      </button>
    </form>
    </div>

    <div class="flex items-center justify-center w-full">
      <img src="/logo.png" alt="WNM Logo" class="h-30 w-auto object-contain" />
    </div>
  </div>
</template>
