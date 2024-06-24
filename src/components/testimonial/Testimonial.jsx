import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-yellow-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./public/profile_pict.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Barang original dan pengiriman cepat, ditambah dengan gratis ongkir. Saya sangat puas dengan pelayanannya.</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#CA8A04' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Fitrah Ali Akbar Setiawan</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Manusia Tampan</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./public/mamah_pict.jpg" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Barang original dan pengiriman cepat, ditambah dengan gratis ongkir. Saya sangat puas dengan pelayanannya.</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#CA8A04' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Lilis Ratnaningsih</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Mamah</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./public/ayah_pict.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Barang original dan pengiriman cepat, ditambah dengan gratis ongkir. Saya sangat puas dengan pelayanannya.</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#CA8A04' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Iwan Setiawan</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Ayah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial