import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import TableList from '../components/TableList';
import { useRouter } from 'next/dist/client/router';


export async function getServerSideProps(context) {
  const {query} = context;
  const qName = query.name;
  const qID = query.id;

  //fetches data from localhost:5500/user?queries=
  console.log(`${process.env.API}`);
  const res = await (await fetch(`http://localhost:5500/user?queries=${qName} ${qID}&location=`)).json();
  const data = Object.values(res.data);
  return {
      props: {data:data}
  }
}


export default function Home({data}) {
  const router = useRouter();
  if(data.length == 1){
    router.push('/desktop3/'+data[0].StudentID);
  }
  
  const listData = data.map((data, index) => {
    return <TableList key={data.StudentID} Index={index+1} StudentID={data.StudentID} FName={data.FName} LName={data.LName} Located={data.Located} />
  })
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
      <div className="flex justify-center item-center">
        <table className="shadow-2xl font-bold border-2 border-cyan-200 w-6/12">
          <thead className="text-cyan">
            <tr className="bg-white cursor-pointer  duration-300">
              <th className="py-3 bg-white-800">ลำดับที่</th>
              <th className="py-3 bg-white-800">ชื่อ</th>
              <th className="py-3 bg-white-800">นามสกุล</th>
              <th className="py-3 bg-white-800">รหัสนักศึกษา</th>
              <th className="py-3 bg-white-800">ภูมิภาค</th>
            </tr>
          </thead>
          <tbody className="text-black text-center">
            {listData}
            {/* <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-100 cursor-pointer  duration-300">
              <td className="py-3 px-6">1</td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
            </tr>
            <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-200 cursor-pointer duration-300">
              <td className="py-3 px-6">2</td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
            </tr>
            <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-300 cursor-pointer duration-300">
              <td className="py-3 px-6">3</td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
            </tr>
            <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-400 cursor-pointer duration-300">
              <td className="py-3 px-6">4</td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
              <td className="py-3 px-6"> </td>
            </tr>
            <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-500 cursor-pointer duration-300">
              <td className="py-3 px-6">5</td>
              <td className="py-3 px-6"> </td>
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