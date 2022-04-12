import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between bg-gradient-to-tl from-sky-600 via-cyan-400 to-sky-300">
      <Navbar/>
        <div className="mb-auto">
          { children }
        </div>
      <Footer />
    </div>
  );
}
 
export default Layout;