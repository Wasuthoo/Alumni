import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className='container bg-opacity-50 bg-sky-500 max-w-screen-2xl p-2'>
        <Image src="/logo.png" alt="site logo" width={110} height={30} />
      </div>
    </nav>
  );
}
 
export default Navbar;

/*
<Link href="/"><a>Home</a></Link>
<Link href="/about"><a>About</a></Link>
<Link href="/ninjas/"><a>Ninja Listing</a></Link>
*/