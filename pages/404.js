import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className="not-found">

    <div>
      <div className=" bg-auto bg-gradient-to-b from-sky-300 to-sky-500 ">
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="box p-6 bg-amber-500 rounded-xl p-2 mb-2 shadow-xl">
                 <Image src="/warning.png" alt="site warning" width={30} height={30} />
                <h1 className="text-3xl text-white font-bold">Sorry we didn’t find Anything 
                </h1>
                <p className="text-md text-left text-white">Make sure everything is correct.
                </p>
              
              </div>
      
              
              </form>
            </div>
          </div>  
      </div>
  );
}
 
export default NotFound;