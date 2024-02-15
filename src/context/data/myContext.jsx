//berfungsi untuk membuat dan mengekspor sebuah Context menggunakan createContext dari pustaka React. Context digunakan untuk menyediakan cara agar komponen-komponen di aplikasi React dapat berbagi data tanpa harus melewati prop dari satu tingkat ke tingkat lainnya, terutama dalam hierarki komponen yang dalam.

//myContext digunakan di komponen-komponen lain di aplikasi React: Komponen-komponen lain dalam aplikasi akan mengakses nilai-nilai dari konteks ini dengan menggunakan useContext(MyContext)

import { createContext } from "react";

const myContext = createContext();

export default myContext; 
