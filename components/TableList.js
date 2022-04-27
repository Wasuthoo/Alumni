import React from 'react'
import { useRouter } from 'next/router'

const TableList = ({Index,StudentID, FName,LName,Located}) => {
  const router = useRouter();
  const onClick = () => {
    router.push('/desktop3/'+StudentID);
  } 

  return (
    <tr className="hover:bg-cyan-100 hover:scale-105 bg-cyan-100 cursor-pointer  duration-300"
      onClick={onClick}
    >
        <td className="py-3 px-6">{Index}</td>
        <td className="py-3 px-6">{FName}</td>
        <td className="py-3 px-6">{LName}</td>
        <td className="py-3 px-6">{StudentID}</td>
        {(Located == undefined)?null:<td className="py-3 px-6">{Located}</td>}
    </tr>
  )
}

export default TableList