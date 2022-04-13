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
            <form className="px-8 pt-6 pb-8 mb-4">
              <div className="box- p-10 bg-amber-500 rounded-xl p-2 mb-2 shadow-xl flex justify-center">
                <div className="pr-3 -ml-4 mr-4 mt-2">
                  <Image src="/warning.png" alt="site warning" width={50} height={50} />
                </div>
                <div>
                  <h1 className="text-3xl text-white font-bold">Sorry we didn’t find anything</h1>
                  <p className="text-md text-left text-white">Make sure everything is correct.</p>
                </div>
                
                
              
              </div>
      
              
              </form>
            </div>
      </div>
  );
}
 
export default NotFound;