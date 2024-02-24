import { useEffect, useState } from "react";
import Logo from "../Logo"
import Navbar from "./Navbar"

import './header.css';

/**
 * Header de la aplicación
 * @returns React Component (JSX)
 */
const _Header = () => {

  const [ scrollingDown, setScrollingDown ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0 && !scrollingDown) {
        setScrollingDown(true);
      } else if (scrollTop === 0 && scrollingDown) {
        setScrollingDown(false);
      }
    }

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScrollingDown(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, [scrollingDown]);

  return (
    <div className={
      [
        "header p-4 md:sticky md:top-0",
        scrollingDown ? 'header-during-scrolling shadow-md' : ''
      ].join(' ')
    }>
      <header className="container mx-auto flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between">
        <Logo />
        <Navbar />
      </header>
    </div>
  )
}

export default _Header