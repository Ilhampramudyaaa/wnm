<script setup>
import { ref } from 'vue'

const nama = ref('Nama Anda')
const role = ref('Frontend Developer')
</script>

<template>
  <div class="relative z-10 bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-slate-700 max-w-md w-full text-center hover:scale-105 transition-transform duration-300">
      
      <div class="w-24 h-24 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full mx-auto mb-6 shadow-lg border-4 border-slate-900"></div>
      
      <h1 class="text-3xl font-bold text-white mb-2">{{ nama }}</h1>
      <p class="text-cyan-400 font-medium mb-6 tracking-wide">{{ role }}</p>
      
      <button class="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full w-full transition-colors duration-200 shadow-blue-500/30 shadow-lg">
        Lihat Portofolio
      </button>

  </div>
</template>