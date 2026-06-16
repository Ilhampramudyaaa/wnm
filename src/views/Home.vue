<script setup>
import LocationCard from '../components/LocationCard.vue'
</script>

<template>
  <div class="w-full bg-wbg rounded-xl p-4 md:p-6 shadow-sm">
    
    <div class="w-full mb-6">
      <LocationCard />
    </div>

    <section class="w-full bg-wbg rounded-xl p-6 md:p-10">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8">
        
        <div class="bg-white rounded-lg p-6 text-center shadow flex flex-col items-center justify-between min-h-[250px]">
  
  <div class="w-32 h-32 mb-4 flex items-center justify-center">
    <img 
      src="/delivery.webp" 
      alt="Ilustrasi Delivery" 
      class="w-full h-full object-contain"
    />
  </div>

  <h3 class="text-lg font-bold text-utama mb-4">DELIVERY</h3>
  
  <button class="bg-black hover:bg-utama text-white font-semibold py-2 px-6 rounded transition duration-200 w-full md:w-auto">
    Pesan Delivery
  </button>
</div>
        
        <div class="bg-white rounded-lg p-8 text-center shadow flex flex-col items-center justify-center min-h-[180px]">
           <div class="w-32 h-32 mb-4 flex items-center justify-center">
    <img 
      src="/Group.webp" 
      alt="Ilustrasi Pickup" 
      class="w-full h-full object-contain"
    />
  </div>
          <h3 class="text-lg font-bold text-utama mb-4">PICKUP</h3>
          <button class="bg-black hover:bg-utama text-white font-semibold py-2 px-6 rounded transition duration-200">
            Ambil di Toko
          </button>
        </div>

      </div>
<div class="w-full bg-white rounded-xl p-6 md:p-8 text-center shadow-md mb-8">
  <h3 class="text-xl font-extrabold text-black mb-6 tracking-wide">
    MENU ANDALAN HARI INI
  </h3>
  
  <div class="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg group transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
    
    <img 
      src="/mie_bangladesh.webp" 
      alt="Mie Bangladesh WNM" 
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10 text-left">
      
      <div class="absolute top-6 right-6 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">
        <span class="text-white font-black tracking-wider text-sm">WNM</span>
      </div>

      <h4 class="text-3xl md:text-5xl font-black text-[#f26522] tracking-wide uppercase drop-shadow-md mb-2">
        Mie <br class="md:hidden" /> bangladesh
      </h4>
      <p class="text-gray-200 text-sm md:text-base max-w-xl font-medium drop-shadow">
        Mie rempah khas dengan kuah nyemek yang kaya rasa, disajikan lengkap dengan telur setengah matang dan taburan bawang goreng renyah.
      </p>
    </div>

  </div>
</div>
    </section>
  </div>
</template>