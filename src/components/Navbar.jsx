import { useState, useEffect } from 'react'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoBlanco = 'img/logoBlanco.webp';
  const logoVerde = 'img/logoVerde.webp';


  return (
    <nav id="navbar"
        className={`fixed w-full z-50 bg-transparent [&.scrolled]:bg-white [&.scrolled]:shadow-md transition-all duration-300 group ${scrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
                <a href="#home" className="block">
                    <img src="img/logoBlanco.webp" alt="Eternal Vows" className="h-10 md:h-12 w-auto block group-[.scrolled]:hidden" />
                    <img src="img/logoVerde.webp" alt="Eternal Vows" className="h-10 md:h-12 w-auto hidden group-[.scrolled]:block" />
                </a>
            </div>
            <ul className="hidden md:flex space-x-8 items-center">
                <li><a data-i18n="nav_home"
                        className="text-sm uppercase tracking-wider text-white group-[.scrolled]:text-gray-800 hover:text-primary group-[.scrolled]:hover:text-primary transition-colors"
                        href="#home">Inicio</a></li>
                <li><a data-i18n="nav_about"
                        className="text-sm uppercase tracking-wider text-white group-[.scrolled]:text-gray-800 hover:text-primary group-[.scrolled]:hover:text-primary transition-colors"
                        href="#about">Nosotros</a></li>
                <li><a className="text-sm uppercase tracking-wider text-white group-[.scrolled]:text-gray-800 hover:text-primary group-[.scrolled]:hover:text-primary transition-colors"
                        href="#portfolio" data-i18n="nav_portfolio">Portafolio</a></li>
                <li><a data-i18n="nav_faq"
                        className="text-sm uppercase tracking-wider text-white group-[.scrolled]:text-gray-800 hover:text-primary group-[.scrolled]:hover:text-primary transition-colors"
                        href="#faq">Preguntas</a></li>
                <li><a className="px-5 py-2 border border-white text-white group-[.scrolled]:border-primary group-[.scrolled]:text-primary hover:bg-primary hover:border-primary hover:text-white group-[.scrolled]:hover:text-white transition-all duration-300 text-sm uppercase tracking-wider rounded"
                        href="https://wa.me/529981545028" target="_blank" data-i18n="nav_contact">Contacto</a></li>
                <li><button id="lang-toggle"
                        className="lang-toggle ml-2 px-3 py-1 border border-white text-white group-[.scrolled]:border-gray-600 group-[.scrolled]:text-gray-600 rounded hover:bg-primary hover:border-primary hover:text-white group-[.scrolled]:hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest">EN</button>
                </li>
            </ul>
            <button 
                id="mobile-menu-btn" 
                className="md:hidden text-white group-[.scrolled]:text-gray-800 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="material-icons-outlined">menu</span>
            </button>
        </div>

        <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100 transition-all duration-300`}>
            <div className="flex flex-col px-6 py-6 space-y-4">
                <a data-i18n="nav_home" className="text-gray-800 hover:text-primary text-sm uppercase tracking-wider font-medium" href="#home">Inicio</a>
                <a data-i18n="nav_about" className="text-gray-800 hover:text-primary text-sm uppercase tracking-wider font-medium" href="#about">Nosotros</a>
                <a data-i18n="nav_portfolio" className="text-gray-800 hover:text-primary text-sm uppercase tracking-wider font-medium" href="#portfolio">Portafolio</a>
                <a data-i18n="nav_faq" className="text-gray-800 hover:text-primary text-sm uppercase tracking-wider font-medium" href="#faq">Preguntas</a>
                <a data-i18n="nav_contact" className="text-gray-800 hover:text-primary text-sm uppercase tracking-wider font-medium" href="#contact">Contacto</a>
                <button className="lang-toggle text-left text-gray-800 hover:text-primary text-xs font-bold uppercase tracking-widest pt-2 border-t border-gray-100">EN</button>
            </div>
        </div>
    </nav>
  )
}
