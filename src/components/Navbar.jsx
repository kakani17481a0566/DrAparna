import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const isActive = (path) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
        ? 'py-4 bg-white/95 backdrop-blur-md shadow-md'
        : 'py-6 bg-transparent'
        }`;

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={navClasses}>
                <div className="w-full px-4 md:px-12 h-full">

                    {/* Desktop Split Layout */}
                    <div className="hidden md:flex justify-between items-center h-full">

                        {/* Left Links */}
                        <div className="flex-1 flex justify-start space-x-8">
                            <NavLink to="/" label="Home" active={isActive('/')} />
                            <NavLink to="/vision" label="Vision" active={isActive('/vision')} />
                        </div>

                        {/* Center Logo */}
                        <div className="flex-0 mx-4">
                            <Link
                                to="/"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="flex flex-col items-center group"
                            >
                                <span className="font-serif text-3xl font-bold text-dr-dark-purple tracking-wide group-hover:text-dr-accent transition-colors duration-300">
                                    Dr Aperna
                                </span>
                                <span className="font-sans text-xs tracking-[0.2em] text-dr-text-dark uppercase mt-1">
                                    Volluru
                                </span>
                            </Link>
                        </div>

                        {/* Right Links */}
                        <div className="flex-1 flex justify-end space-x-8 items-center">
                            <NavLink to="/milestones" label="Milestones" active={isActive('/milestones')} />
                            <Link
                                to="/digital-card"
                                className="font-sans text-sm font-medium text-dr-text-dark hover:text-dr-accent transition-colors duration-300 border border-dr-dark-purple/20 px-4 py-2 rounded-full hover:border-dr-accent"
                            >
                                Digital Card
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Header */}
                    <div className="md:hidden flex justify-between items-center">
                        <Link
                            to="/"
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                closeMenu();
                            }}
                        >
                            <span className="font-serif text-2xl font-bold text-dr-dark-purple tracking-wide">
                                Dr Aperna
                            </span>
                        </Link>

                        <button
                            className="relative z-50 w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle navigation"
                        >
                            <span className={`block w-6 h-0.5 bg-dr-text-dark transition-all duration-300 ease-out rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} ></span>
                            <span className={`block w-6 h-0.5 bg-dr-text-dark transition-all duration-300 ease-out rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
                            <span className={`block w-6 h-0.5 bg-dr-text-dark transition-all duration-300 ease-out rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} ></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}>
                <div className="flex flex-col items-center space-y-8 text-center">
                    <MobileNavLink
                        to="/"
                        label="Home"
                        active={isActive('/')}
                        isOpen={isMobileMenuOpen}
                        delay="100ms"
                        onClick={closeMenu}
                    />
                    <MobileNavLink
                        to="/vision"
                        label="Vision"
                        active={isActive('/vision')}
                        isOpen={isMobileMenuOpen}
                        delay="200ms"
                        onClick={closeMenu}
                    />
                    <MobileNavLink
                        to="/milestones"
                        label="Milestones"
                        active={isActive('/milestones')}
                        isOpen={isMobileMenuOpen}
                        delay="300ms"
                        onClick={closeMenu}
                    />

                    <Link
                        to="/digital-card"
                        onClick={closeMenu}
                        style={{ transitionDelay: isMobileMenuOpen ? '400ms' : '0ms' }}
                        className={`mt-4 px-8 py-3 rounded-full border border-dr-dark-purple text-dr-dark-purple font-medium text-lg hover:bg-dr-dark-purple hover:text-white transition-all duration-700 ease-out transform block text-center ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    >
                        Digital Card
                    </Link>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ to, label, active }) => (
    <Link to={to} className={`relative font-sans text-sm font-medium transition-colors duration-300 ${active ? 'text-dr-accent' : 'text-dr-text-dark hover:text-dr-accent'}`}>
        {label}
        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-dr-accent transition-all duration-300 group-hover:w-full ${active ? 'w-full' : ''}`}></span>
    </Link>
);

const MobileNavLink = ({ to, label, active, isOpen, delay, onClick }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleClick = (e) => {
        e.preventDefault();

        if (pathname === to) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate(to);
        }

        if (onClick) onClick();
    };

    return (
        <a
            href={to}
            onClick={handleClick}
            style={{ transitionDelay: isOpen ? delay : '0ms' }}
            className={`font-serif text-3xl font-bold transition-all duration-700 ease-out transform cursor-pointer ${active ? 'text-dr-accent' : 'text-dr-text-dark'
                } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
            {label}
        </a>
    );
};

export default Navbar;
