'use client';

import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, PaperAirplaneIcon, SparklesIcon } from '@heroicons/react/24/outline';
import TButton from '../core/TButton';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', to: '/', id: 1 },
  { name: 'About Us', to: '/about', id: 2 },
  { name: 'Portfolio', to: '/portfolio', id: 3 },
  { name: 'Services & Pricing', to: '/Services_Pricing', id: 4 },
  { name: 'Resume', to: '/resume', id: 5 },
  { name: 'Blog', to: '/blog', id: 6 },
  { name: 'Contact Us', to: '/contact', id: 7 },
];

export default function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`
        w-full z-50 border-b border-gray-700/30 transition-all duration-500 ease-out
        ${isScrolled
          ? 'fixed top-0 bg-white/10 backdrop-blur-lg shadow-xl text-[var(--text-one)]'
          : 'relative bg-[var(--bg-one)] text-[var(--text-one)] shadow-md'}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-3 rounded-full text-text-one hover:text-white hover:bg-gray-800/50 focus:outline-none transition-all duration-300 group">
              {({ open }) => (
                <>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-7 w-7 transform transition-all duration-500 group-hover:rotate-180" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-7 w-7 transform transition-all duration-300 group-hover:scale-110" aria-hidden="true" />
                  )}
                </>
              )}
            </DisclosureButton>
          </div>

          {/* Logo and Desktop Menu */}
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Logo />
              <span className="ml-2 text-xs font-light text-gray-400 hidden lg:block tracking-wider">CREATIVE SOLUTIONS</span>
            </div>

            <div className="hidden lg:ml-16 lg:flex lg:items-center">
              <div className="flex space-x-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.to;
                  return (
                    <Link
                      key={item.id}
                      href={item.to}
                      className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300
                        ${isActive ? 'text-[var(--text-one)] border-b-2 border-white' : 'text-text-one hover:text-[var(--text-one)] hover:border-b hover:border-gray-400'}
                      `}
                    >
                      <div className="flex items-center gap-1">
                        <span>{item.name}</span>
                        {isActive && (
                          <SparklesIcon className="h-3.5 w-3.5 text-yellow-400 animate-spin-slow" />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="absolute inset-y-0 right-0 flex items-center gap-3 pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
            <div className="relative group">
              <TButton
                Type="link"
                Icon={<PaperAirplaneIcon className="w-4 h-4 transform transition-all duration-300 group-hover:rotate-45" />}
                To="/contact"
                className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.03] overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </TButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="lg:hidden transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]">
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.to;
            return (
              <DisclosureButton
                key={item.id}
                as={Link}
                href={item.to}
                className={`block px-4 py-3 rounded-lg text-base font-medium w-full text-left
                  transition-all duration-300 transform
                  ${isActive
                    ? 'text-white border-b-2 border-white'
                    : 'text-text-one hover:text-white hover:translate-x-1'}
                `}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {isActive && <SparklesIcon className="h-4 w-4 text-yellow-400 animate-pulse" />}
                </div>
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
