import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import TableList from '../components/TableList';

export async function getServerSideProps(context) {
  const {query} = context;
  let qLocation = query.location;
  console.log(typeof(qLocation));
  /*fontend       RegCode
  1 ภาคเหนือ     1 ภาคกลาง
  2 กลาง 2 ภาคเหนือ
  3 ตะวันออก      3 ภาคใต้
  4 ตะวันออกเฉียงเหนือ      4 ภาคตะวันออก
  5 ตะวันตก     5 ภาคตะวันออกเฉียงเหนือ
  6 ใต้      6 ภาคตะวันตก
  */
  switch (qLocation) {
   case '1':
     qLocation = '2';
     break;
   case '2':
      qLocation = '1';
      break;
    case '3':
      qLocation = '4';
      break;
    case '4':
      qLocation = '5';
      break;
    case '5':
      qLocation = '6';
      break;
    case '6':
      qLocation = '3';
      break;
    default:
      qLocation = '';
      break;
    }
  const res = await (await fetch(`http://api:5500/user?queries=&location=${qLocation}`)).json();
  const data = res.data;
  return {
      props: {data:data}
  }
}

export default function Home({data}) {
  
  const listData = data.map((data, index) => {
    return <TableList key={data.StudentID} Index={index+1} StudentID={data.StudentID} FName={data.FName} LName={data.LName}/>
  })

  return (
  <div>
    <h1 className="text-3xl font-bold text-indigo-900 ml-5  p-5 py-8 ">การกระจายเชิงภูมิภาค</h1>
      <div className="mb-8">       
        <div className="flex justify-left mt-10">
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
      <div className="flex justify-center item-center">
        <table className="shadow-2xl font-bold border-2 border-cyan-200 w-6/12">
          <thead className="text-cyan">
            <tr className="bg-white cursor-pointer  duration-300">
              <th className="py-3 bg-white-800">ลำดับที่</th>
              <th className="py-3 bg-white-800">ชื่อ</th>
              <th className="py-3 bg-white-800">นามสกุล</th>
              <th className="py-3 bg-white-800">รหัสนักศึกษา</th>
            </tr>
          </thead>
          <tbody className="text-black text-center">
            {listData}
            {/* <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-100 cursor-pointer  duration-300">
              <td className="py-3 px-6">1</td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
            </tr>
            <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-200 cursor-pointer duration-300">
              <td className="py-3 px-6">2</td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
            </tr>
            <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-300 cursor-pointer duration-300">
              <td className="py-3 px-6">3</td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
            </tr>
            <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-400 cursor-pointer duration-300">
              <td className="py-3 px-6">4</td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
            </tr>
            <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-500 cursor-pointer duration-300">
              <td className="py-3 px-6">5</td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
            </tr> */}
          </tbody>
        </table>
      </div>
  </div>
  )
}