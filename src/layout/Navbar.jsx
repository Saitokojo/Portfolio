import { Button } from '@/components/Button'
import { Menu, X} from 'lucide-react';
import { useEffect, useState } from 'react';

const navLink = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);


  useEffect(() => {
    const handleScroll = () =>{
      if (window.scrollY >50) {
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScroll ? "glass-strong py-3 rounded-2xl mx-10 my-2":"bg-transparent py-5"}  z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-pink-300"
        >
          MT<span className="text-pink">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className='hidden md:block'>
          <Button size="sm">Q&A</Button>
        </div>

        {/* Mobile menu Button */}
        <button className='md:hidden p-2 text-foreground' onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X/> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden glass-strong animate-fade-in'>
        <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
          {navLink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-forground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">Q&A</Button>
        </div>
      </div>)}
    </header>
  );
};
