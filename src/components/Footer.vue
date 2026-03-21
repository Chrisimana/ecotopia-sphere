<template>
  <footer class="bg-background text-white py-8">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Brand Section -->
      <div>
        <h3 class="text-2xl font-bold mb-2">EcoTopia Sphere</h3>
        <p class="text-while mb-4">Circle of Green Life for a Smarter Future</p>

        <!-- Social Media Icons -->
        <div class="flex space-x-4">

          <!-- Icon & Link Instagram -->
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition">
            <img src="../assets/icons/footer/instagram.svg" alt="Instagram" class="w-6 h-6">
          </a>

          <!-- Icon & Link LinkedIn -->
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition">
            <img src="../assets/icons/footer/linkedin.svg" alt="LinkedIn" class="w-6 h-6">
          </a>

          <!-- Icon & Link Github -->
          <a href="https://github.com/Chrisimana" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition">
            <img src="../assets/icons/footer/github.svg" alt="Github" class="w-6 h-6">
          </a>
        </div>
      </div>

      <!-- Quick Links Section -->
      <div>
        <h4 class="font-bold mb-4 text-while">Quick Links</h4>
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

      <!-- Contact Section -->
      <div>
        <h4 class="font-bold mb-4 text-while">Contact</h4>
        <div class="space-y-3">

          <!-- Icon & Email -->
          <div class="flex items-start">
            <img src="../assets/icons/footer/email.svg" alt="Email" class="w-4 h-4 mt-1 mr-2">
            <span>Email</span>
          </div>

          <!-- Icon & Nomor telepon -->
          <div class="flex items-start">
            <img src="../assets/icons/footer/phone.svg" alt="Phone" class="w-4 h-4 mt-1 mr-2">
            <span>Nomor Telepon </span>
          </div>

          <!-- Icon & Alamat -->
          <div class="flex items-start">
            <img src="../assets/icons/footer/address.svg" alt="Location" class="w-4 h-4 mt-1 mr-2">
            <span>Alamat</span>
          </div>
        </div>
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