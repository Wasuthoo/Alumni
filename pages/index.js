import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
   <div>
      <Head>
        <title>Alumni | Home</title>
      </Head>
      <div className=" bg-gradient-to-b from-sky-300 to-sky-500">
        <h1 className="text-xl font-bold underline p-5">ระบบค้นหารายชื่อศิษย์เก่า</h1>
        <div className='grid grid-cols-2 gap-4'>
          <div className='p-2'>
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-md text-center text-white font-bold bg-sky-900 rounded-xl p-2 mb-2">ค้นหาโดยรายชื่อ</h2> 
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Select Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ระบุชื่อ - นามสกุล"/>
              </div>

              <div className="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Select ID
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="ระบุรหัสนักศึกษา"/>
              </div>
                <div class="flex justify-center">
                  <button class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
                    ค้นหา
                  </button>
              </div>
            </form>
          </div>
          <div>
          <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-md text-center text-white font-bold bg-sky-900 rounded-xl p-2 mb-2">ค้นหาโดยรายชื่อ</h2> 
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Select Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ระบุชื่อ - นามสกุล"/>
              </div>

              <div className="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Select ID
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="ระบุรหัสนักศึกษา"/>
              </div>
                <div class="flex justify-center">
                  <button class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
                    ค้นหา
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
   </div>
    
   
  )
}

