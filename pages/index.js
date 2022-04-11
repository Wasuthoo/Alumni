import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-gradient-to-tl from-sky-600 via-cyan-400 to-sky-300">
          <h1 className="text-3xl font-bold ml-5  p-5 py-8 ">ระบบค้นหารายชื่อศิษย์เก่า</h1>
          
          <div className='grid grid-cols-2 gap-4'> {/*แบ่งเป็น 2 colum*/}
            <div className='p-2'> {/*colum1*/}
              <form className="bg-white bg-opacity-80 shadow-md  rounded-2xl px-8 pt-6 pb-8 ml-2 mb-4">
                <h2 className="text-2xl text-center font-bold rounded-xl p-2 mb-2">ค้นหาโดยรายชื่อ</h2> 
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Select Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ระบุชื่อ - นามสกุล"/>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Select ID
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="ระบุรหัสนักศึกษา"/>
                </div>
                  <div className="flex justify-center">
                    <button className="bg-sky-500 my-6 shadow-md  hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
                      ค้นหา
                    </button>
                </div>
              </form>
            </div> {/*end colum1 */}
            <div> {/*colum2 */}
            <form className="bg-white bg-opacity-80 shadow-md  rounded-2xl px-8 pt-6 pb-8 mt-2 mr-5 mb-4">
                <h2 className="text-2xl text-center font-bold rounded-xl p-2 mb-2">ค้นหาโดยภูมิภาค</h2> 
                <div className="mb-4">
                  
                  <div className="flex justify-center mt-10">
                  <div className=" mb-3 xl:w-96">
                    <select className="form-select appearance-none block w-full px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option value>ระบุภาค</option>
                        <option value="1">ภาคเหนือ</option>
                        <option value="2">ภาคกลาง</option>
                        <option value="3">ภาคตะวันออก</option>
                        <option value="4">ตะวันออกเฉียงเหนือ</option>
                        <option value="5">ภาคตะวันตก</option>
                        <option value="6">ภาคใต้</option>
                        <option value="7">ดูทั้งหมด</option>
                    </select>
                  </div>
                </div>
                </div>
                  <div className="flex justify-center mt-10">
                    <button className="bg-sky-500 shadow-md my-12 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
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
