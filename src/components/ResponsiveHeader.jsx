import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  AdjustmentsHorizontalIcon,
  UserCircleIcon,
  XMarkIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import { MYPAGE } from '../constants/paths.js';

const Header = ({ isLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const helpMenuRef = useRef(null);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsExpanded(scrollPosition === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (helpMenuRef.current && !helpMenuRef.current.contains(event.target)) {
        setShowHelpMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleHelpMenu = () => {
    setShowHelpMenu(!showHelpMenu);
  };

  return (
    <div className='flex w-full justify-center'>
      <motion.header
        className='fixed top-0 z-50 flex items-center justify-center bg-white shadow-md'
        initial={false}
        animate={{
          height: isExpanded ? '40px' : '20px',
          width: isExpanded ? 'min(100vw, 1600px)' : 'min(100vw, 1280px)',
        }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsExpanded(true)}
      >
        <div className='flex w-full items-center justify-between px-4'>
          <div className='flex items-center'>
            <NavLink to={'/trip'}>
              <motion.img
                src='/logo.png'
                alt='Logo'
                animate={{
                  height: isExpanded ? '24px' : '16px',
                }}
                className='mr-2'
              />
            </NavLink>
          </div>

          <motion.div
            className='mx-4 flex flex-grow items-center'
            animate={{
              scale: isExpanded ? 1 : 0.6,
              opacity: isExpanded ? 1 : 0.8,
            }}
          >
            <div className='relative mr-2' ref={helpMenuRef}>
              <QuestionMarkCircleIcon
                className='h-6 w-6 cursor-pointer text-gray-600'
                onClick={toggleHelpMenu}
              />
              <AnimatePresence>
                {showHelpMenu && (
                  <motion.div
                    className='absolute left-0 top-full mt-2 w-48 rounded-md bg-white p-2 shadow-md'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className='relative'>
                      <XMarkIcon
                        className='absolute right-0 top-0 h-4 w-fit cursor-pointer text-gray-600'
                        onClick={() => setShowHelpMenu(false)}
                      />
                      <ul className='mt-4'>
                        <Link to='/about/why'>
                          <li className='mt-1'>Why Mannazu?</li>
                        </Link>
                        <Link to='/about/how-it-works'>
                          <li className='mt-1'>How it works?</li>
                        </Link>
                        <Link to='/about/safety'>
                          <li className='mt-1'>Safety</li>
                        </Link>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className='relative flex-grow'>
              <input
                type='text'
                placeholder='Search...'
                className='w-full rounded-md border px-2 py-1 pl-8 text-gray-400 placeholder-gray-400'
              />
              <MagnifyingGlassIcon className='absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400' />
            </div>
            <AdjustmentsHorizontalIcon
              className='ml-2 h-6 w-6 cursor-pointer text-gray-600'
              onClick={() => setShowOptions(!showOptions)}
            />
          </motion.div>

          <motion.div
            animate={{
              scale: isExpanded ? 1 : 0.6,
            }}
          >
            {isLoggedIn ? (
              <div className='relative' ref={profileMenuRef}>
                <UserCircleIcon
                  className='h-6 w-6 cursor-pointer text-gray-600'
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                />
                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      className='absolute right-0 top-full mt-2 w-48 rounded-md bg-white p-2 shadow-md'
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <ul>
                        <li className='mt-1'>
                          <Link to={MYPAGE}>My Page</Link>
                        </li>
                        <li className='mt-1'>
                          <Link to='/settings'>Settings</Link>
                        </li>
                        <li className='mt-1'>
                          <Link to='/auth/sign-out'>Log out</Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to={'/auth/sign-in'}>
                <ArrowRightEndOnRectangleIcon className='h-6 w-6 text-gray-600' />
              </Link>
            )}
          </motion.div>
        </div>

        <AnimatePresence>
          {showOptions && (
            <motion.div
              className='absolute left-0 right-0 top-full bg-white shadow-md'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className='relative p-4'>
                <XMarkIcon
                  className='absolute right-2 top-2 h-6 w-6 cursor-pointer text-gray-600'
                  onClick={() => setShowOptions(false)}
                />
                <ul className='mb-4 flex'>
                  <li className='mr-4 cursor-pointer'>Tab 1</li>
                  <li className='mr-4 cursor-pointer'>Tab 2</li>
                  <li className='cursor-pointer'>Tab 3</li>
                </ul>
                <div>Option content goes here</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Header;
