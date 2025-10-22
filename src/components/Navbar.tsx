import { Menu } from "lucide-react"

const Navbar = () => {
  return (
    <header className="bg-white z-50 py-8">
      <nav className="box-container flex justify-between items-center">
        <a href="#"><img src="/logo.png" alt="Logo" className="w-35" /></a>

        <div className="md:hidden">
          <Menu />
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-4 lg:gap-16">
            <a href="#">About Us</a>
            <a href="#">Service</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#" className="border py-3 px-2 rounded-2xl">Request a quote</a>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar