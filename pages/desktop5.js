import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
  <div>
    <h1 className="text-3xl font-bold text-indigo-900 ml-5  p-5 py-8 ">รายชื่อศิษย์เก่า</h1>
      <div className="mb-8">       
        <div className="flex justify-left mt-10">
          <div className=" mb-3 xl:w-96">
             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ค้นหา"/>
          </div>
        </div>
      </div> 
      <div class="flex justify-center item-center">
        <table class="shadow-2xl font-bold border-2 border-cyan-200 w-6/12">
          <thead class="text-cyan">
            <tr class="bg-white cursor-pointer  duration-300">
              <th class="py-3 bg-white-800">ลำดับที่</th>
              <th class="py-3 bg-white-800">ชื่อ</th>
              <th class="py-3 bg-white-800">นามสกุล</th>
              <th class="py-3 bg-white-800">รหัสนักศึกษา</th>
              <th class="py-3 bg-white-800">ภูมิภาค</th>
            </tr>
          </thead>
          <tbody class="text-black text-center">
            <tr class="hover:bg-cyan-100 hover:scale-105 bg-cyan-100 cursor-pointer  duration-300">
              <td class="py-3 px-6">1</td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
            </tr>
            <tr class="hover:bg-cyan-100 hover:scale-105 bg-cyan-200 cursor-pointer duration-300">
              <td class="py-3 px-6">2</td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
            </tr>
            <tr class="hover:bg-cyan-100 hover:scale-105 bg-cyan-300 cursor-pointer duration-300">
              <td class="py-3 px-6">3</td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
            </tr>
            <tr class="hover:bg-cyan-100 hover:scale-105 bg-cyan-400 cursor-pointer duration-300">
              <td class="py-3 px-6">4</td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
            </tr>
            <tr class="hover:bg-cyan-100 hover:scale-105 bg-cyan-500 cursor-pointer duration-300">
              <td class="py-3 px-6">5</td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
              <td class="py-3 px-6"> </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
  )
}