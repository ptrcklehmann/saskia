import React from 'react'
import {Link} from 'gatsby'

import * as styles from './navigation.module.css'



const Navigation=() => {
  const [top,setTop]=React.useState(true);

  // detect whether user has scrolled the page down by 10px
  React.useEffect(() => {
    const scrollHandler=() => {
      window.pageYOffset>10? setTop(false):setTop(true)
    };
    window.addEventListener('scroll',scrollHandler);
    return () => window.removeEventListener('scroll',scrollHandler);
  },[top]);
  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top&&'backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl px-5 py-4 mx-auto sm:px-6">
        <div className="flex flex-row items-center justify-between lg:justify-start">
        <div className="flex-shrink-0 mr-4">
          <Link to="/" className={`${styles.logoLink} font-bold tracking-tighter transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8`}>
            <span className={styles.logo} />
            <span >Dr. Saskia Eschenbacher</span>
          </Link>
        </div>
        <nav className='flex flex-col flex-grow md:flex md:justify-end md:flex-row'>
          <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
            <li className={`mx-3 ${styles.growingUnderline}`}>
              <Link to="/publications/" className={styles.navigationItem} activeClassName="active">
                Publications
              </Link>
            </li>
            <li className={`mx-3 ${styles.growingUnderline}`}>
              <Link to="/contact/" className={styles.navigationItem} activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Navigation
