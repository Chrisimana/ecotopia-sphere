import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../pages/Beranda.vue'
import Tentang from '../pages/Tentang.vue'
import Tips from '../pages/Tips.vue'
import InovasiCerdas from '../pages/InovasiCerdas.vue'
import SmartAction from '../pages/SmartAction.vue'

// Definisi untuk semua router
const routes = [

    // Router utama
    { path: '/', name: 'Beranda', component: Beranda },
    { path: '/tentang', name: 'Tentang', component: Tentang },
    { path: '/tips', name: 'Tips', component: Tips },
    { path: '/inovasi-cerdas', name: 'InovasiCerdas', component: InovasiCerdas },
    { path: '/smart-action', name: 'SmartAction', component: SmartAction },

    // Router Artikel
    {
        path: '/artikel/hemat-energi-listrik',
        name: 'HematEnergiListrik',
        component: () => import('../pages/artikel/HematEnergiListrik.vue')
    },
    {
        path: '/artikel/manfaat-cahaya-alami',
        name: 'ManfaatCahayaAlami',
        component: () => import('../pages/artikel/ManfaatCahayaAlami.vue')
    },
    {
        path: '/artikel/gunakan-energi-terbarukan',
        name: 'GunakanEnergiTerbarukan',
        component: () => import('../pages/artikel/GunakanEnergiTerbarukan.vue')
    },
    {
        path: '/artikel/hemat-air',
        name: 'HematAir',
        component: () => import('../pages/artikel/HematAir.vue')
    },
    {
        path: '/artikel/tampung-air-hujan',
        name: 'TampungAirHujan',
        component: () => import('../pages/artikel/TampungAirHujan.vue')
    },
    {
        path: '/artikel/mesin-cuci-efisien',
        name: 'MesinCuciEfisien',
        component: () => import('../pages/artikel/MesinCuciEfisien.vue')
    },
    {
        path: '/artikel/pisahkan-sampah',
        name: 'PisahkanSampah',
        component: () => import('../pages/artikel/PisahkanSampah.vue')
    },
    {
        path: '/artikel/kurangi-penggunaan-plastik',
        name: 'KurangiPenggunaanPlastik',
        component: () => import('../pages/artikel/KurangiPenggunaanPlastik.vue')
    },
    {
        path: '/artikel/kompos-sampah-organik',
        name: 'KomposSampahOrganik',
        component: () => import('../pages/artikel/KomposSampahOrganik.vue')
    },
    {
        path: '/artikel/transportasi-ramah-lingkungan',
        name: 'TransportasiRamahLingkungan',
        component: () => import('../pages/artikel/TransportasiRamahLingkungan.vue')
    },
    {
        path: '/artikel/carpooling',
        name: 'Carpooling',
        component: () => import('../pages/artikel/Carpooling.vue')
    },
    {
        path: '/artikel/kendaraan-listrik',
        name: 'KendaraanListrik',
        component: () => import('../pages/artikel/KendaraanListrik.vue')
    },
]

// Membuat instance router Vue
const router = createRouter({

    // Mode history untuk URL yang bersih (tanpa hash)
    history: createWebHistory(),

    // Daftar route yang telah didefinisikan
    routes,

    // Scroll kembali ke atas saat pindah route
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
            behavior: 'smooth'
        }
    }
})

export default router