<template>
  <footer class="bg-background text-white py-8">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Brand Section -->
      <div>
        <h3 class="text-2xl font-bold mb-2">EcoTopia Sphere</h3>
        <p class="text-while mb-4">Circle of Green Life for a Smarter Future</p>

        <!-- Social Media Icons -->
        <div class="flex space-x-4">

          <!-- Icon & Link Github -->
          <a href="https://github.com/Chrisimana" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition">
            <img src="../assets/icons/footer/github.svg" alt="Github" class="w-6 h-6">
          </a>
        </div>
      </div>

      <!-- Navigasi Links Section -->
      <div>
        <h4 class="font-bold mb-4 text-while">Navigasi</h4>
        <ul class="space-y-2">

          <!-- Link ke halaman Beranda -->
          <li><router-link to="/" class="hover:text-accent transition">Beranda</router-link></li>

          <!-- Link ke halaman Tentang -->
          <li><router-link to="/tentang" class="hover:text-accent transition">Tentang</router-link></li>

          <!-- Link ke halaman Tips -->
          <li><router-link to="/tips" class="hover:text-accent transition">Tips</router-link></li>

          <!-- Link ke halaman Inovasi Cerdas -->
          <li><router-link to="/inovasi-cerdas" class="hover:text-accent transition">Inovasi Cerdas</router-link></li>

          <!-- Link ke halaman Smart Action -->
          <li><router-link to="/smart-action" class="hover:text-accent transition">Smart Action</router-link></li>
        </ul>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="container mx-auto px-4 mt-8 pt-6 border-t border-gray-600">

      <!-- Teks hak cipta -->
      <p class="text-center text-gray-300">© 2025-2026 EcoTopia Sphere. All rights reserved</p>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>