'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/algo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false); // For desktop dropdown
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && isOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('nav') && !target.closest('button')) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    {
      href: '/products',
      label: 'Products',
      children: [
        { href: '/products/reddlea', label: 'Reddlea' },
        // Add more products here
      ],
    },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="p-2 rounded-lg transform hover:scale-110 transition-transform duration-300">
              <Image src={logo} alt="Algostack Logo" width={250} height={200} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    className={`text-sm font-medium transition-colors duration-300 ${pathname.startsWith(link.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {link.label}
                  </button>

                  {/* Desktop Dropdown */}
                  {productsOpen && !isMobile && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-xl border border-gray-100 py-2 w-48 z-50">

                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg ${pathname === child.href ? 'text-blue-600 font-semibold' : ''
                            }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${pathname === link.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                  )}
                </Link>
              )
            )}

            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-black transition-all duration-300 ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-white shadow-xl border-t border-gray-100 transform transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href}>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex justify-between w-full py-4 px-4 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  {link.label}
                  <ArrowRight className={`ml-2 w-4 h-4 transform ${productsOpen ? 'rotate-90' : ''}`} />
                </button>
                {productsOpen && (
                  <div className="pl-6 pt-2 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 px-4 text-gray-700 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-4 px-4 rounded-xl text-base font-medium ${pathname === link.href
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:border-l-4 hover:border-gray-200'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/contact"
              className="block w-full py-4 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
