import { useContext } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

function Footer() {
    const context = useContext(myContext)
    const { mode } = context
    return (
      <div>
        <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className="container px-5 py-24 mx-auto" >
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Order</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Local For Vocal</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>About</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</a>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Services</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</a>
                            </li>

                        </nav>
                    </div>
                </div>

            </div>

            <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to={'/'} className='flex'>
                        <div className="flex ">
                            <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>SmartShop</h1>
                        </div>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" style={{ color: mode === 'dark' ? 'white' : '' }}>© 2023 SmartShop —
                        <a className="text-gray-600 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>www.smartshop.com</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://www.instagram.com/fitrahas_/">
                          <button>
                            <AiOutlineInstagram />
                          </button>
                        </a>
                        <a className="ml-3" href="https://github.com/KOCOKERZ">
                          <button>
                            <AiOutlineGithub />
                          </button>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
      </div>
    )
}

export default Footer