import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
	const ID = context.params.id

  //fetches data from localhost:5500/user?queries=
  const res = await (await fetch(`http://api:5500/user/${ID}`)).json();
  const data = res.data;
  
  return {
    props: {data:data[0]}
  }
}

export default function Home({data}) {
  return (
    <div>
          <h1 className="text-3xl font-bold text-indigo-900 ml-5 p-5 py-8 ">ประวัติศิษย์เก่า</h1>
      
          <div className='grid grid-cols-3 gab-4'> {/*แบ่งเป็น 2 colum*/}
            <div className='p-2'> {/*column1*/}
              
              <h2 className="text-2xl text-left font-bold  ml-20 px-20 py-7">ชื่อ</h2> 
              <h2 className="text-2xl text-left font-bold  ml-20 px-20 py-9">นามสกุล</h2> 
              <h2 className="text-2xl text-left font-bold  ml-20 px-20 py-9">รหัสนักศึกษา</h2> 
              <h2 className="text-2xl text-left font-bold  ml-20 px-20 py-9">ภูมิภาค</h2> 
            </div> {/*end column1 */}
            
            <div> {/*column2 */}
            <form className="px-8 pt-6 pb-6 -mb-2">
              <div className="box-border h-10 w-50 mt-5 p-10 bg-white bg-opacity-80 shadow-md rounded-xl  px-1 pt-1 pb-1 ml-1 mt-1 ">
                <h2 className="text-lg text-left ml-2 mt-0.5">{data.FName}</h2> 
                </div>
              </form>
              
               <form className="px-8 pt-6 pb-6 -mb-2">
              <div className="box-border h-10 w-50 mt-5 p-10 bg-white bg-opacity-80 shadow-md rounded-xl  px-1 pt-1 pb-1 ml-1 mb-0.5 ">
                <h2 className="text-lg text-left ml-2 mb-1">{data.LName}</h2> 
                </div>
              </form>

               <form className="px-8 pt-6 pb-6 -mb-2">
              <div className="box-border h-10 w-50 mt-5 p-10 bg-white bg-opacity-80 shadow-md rounded-xl  px-1 pt-1 pb-1 ml-1 mb-1 ">
                <h2 className="text-lg text-left ml-2 mb-1">{data.StudentID}</h2> 
                </div>
              </form>

              <form className="px-8 pt-6 pb-6 mb-1">
              <div className="box-border h-10 w-50 mt-5 p-10 bg-white bg-opacity-80 shadow-md rounded-xl  px-1 pt-1 pb-1 ml-1 mb-1 ">
                <h2 className="text-lg text-left ml-2 mb-1">{data.Located}</h2> 
                </div>
              </form>
              
            </div>

            <div> {/*column3 */}

              <form className = "ml-20">
              <Image src="/profile.png" alt="site profile" width={300} height={300} />
              </form>
            </div>
          
          </div> 
        </div>
     
  )
}
