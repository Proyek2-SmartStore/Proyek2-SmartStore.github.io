//Membuat dan mengonfigurasi store Redux menggunakan @reduxjs/toolkit untuk mengelola state keranjang di dalam store Redux sebagai wadah untuk state aplikasi, yang termasuk state dari cartSlice untuk keranjang belanja. Melalui konfigurasi di store, state keranjang dapat diakses dan diubah dari berbagai komponen dalam aplikasi React yang menggunakan store.

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer :{
    cart : cartSlice
  },
  devTools: true
})