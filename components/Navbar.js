import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className='container bg-sky-800 max-w-screen-2xl p-2 flex-1'>
        <Image src="/logo.png" alt="site logo" width={100} height={30} />

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