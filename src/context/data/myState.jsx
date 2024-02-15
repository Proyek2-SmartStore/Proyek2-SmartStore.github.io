//suatu komponen React yang menggunakan React Hooks (seperti useState dan useEffect) dan berfungsi sebagai state management untuk menyediakan state dan fungsi-fungsi terkait untuk komponen-komponen React lainnya di dalam aplikasi. Ini juga memanfaatkan Firebase untuk berinteraksi dengan database dan menyediakan fungsi-fungsi terkait produk, pesanan, dan pengguna.

//Nilai dari myState disediakan ke seluruh aplikasi melalui MyContext.Provider: Seluruh aplikasi dapat mengakses nilai-nilai dan fungsi-fungsi yang disediakan oleh myState melalui konteks, sehingga memungkinkan berbagai komponen untuk berbagi dan mengelola state secara global.

import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import {Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';

function myState(props) {
    // mode
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
      if(mode === 'light') {
         setMode('dark');
         document.body.style.backgroundColor = "rgb(17, 24, 39)"
      }
      else{
          setMode('light');
          document.body.style.backgroundColor = "white"
      }
    }

    const [loading, setLoading] = useState(false);

    // add product function

    const [products, setproducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
    });

    const addProduct = async () => {
        if(products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
          return toast.error("all fields are required")
        }

        setLoading(true)

        try {
          const productRef = collection(fireDB, 'products');
          await addDoc(productRef, products)
          toast.success("Add product successfully");
          setTimeout(() => {
            window.location.href = '/dashboard'
          }, 800);
          getProductData();
          setLoading(false)
          
        } catch (error) {
          console.log(error);
          setLoading(false)
        }
    }

    // get product function
    const [product, setproduct] = useState([]);

    const getProductData = async () => {

        setLoading(true)

        try {
            const q = query(
              collection(fireDB, 'products'),
              orderBy('time')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
              let productArray = [];
              QuerySnapshot.forEach((doc)=>{
                productArray.push({...doc.data(), id: doc.id});
              });
              setproduct(productArray)
              setLoading(false)
            });

            return () => data;

        } catch (error) {
          console.log(error)
          setLoading(false)
        }

    }

  useEffect(() => {
    getProductData();
  }, []);

  // update product function

  const edithandle = (item) => {
    setproducts(item)
  }

  const updateProduct = async () => {
    setLoading(true)
    try {
      
      await setDoc(doc(fireDB, 'products', products.id), products)
      toast.success("Product Updated successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData();
      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  //delete product function
  const deleteProduct = async (item)=> {
    setLoading(true)
    try {
      await deleteDoc(doc(fireDB, 'products', item.id))
      toast.success('Product Deleted successfully')
      getProductData();
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  
  // get order function
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  // get user function
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getOrderData();
    getUserData();
  }, []);

  // search key
  const [searchkey, setSearchkey] = useState('')

  return (
    <MyContext.Provider value={{mode, toggleMode, loading, setLoading,
    products, setproducts, addProduct, product, edithandle, updateProduct, deleteProduct, order, setUser, user, 
    searchkey, setSearchkey
    }}>
       {props.children}
    </MyContext.Provider>
  )
}

export default myState 
