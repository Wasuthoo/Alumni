import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={220} height={70} />
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