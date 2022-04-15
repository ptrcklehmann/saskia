import React from 'react'
import {Link} from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation=() => (

  <div className="container w-full max-w-7xl">
    <div x-data="{ open: false }" className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-between lg:justify-start">
        <Link to="/" className="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
          <span className={styles.logo} />
          <span className={styles.logoLink}>Dr. Saskia Eschenbacher</span>
        </Link>
        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick="open = !open">
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8" {...props}>
            <path
              x-show="!open"
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
            <path
              x-show="open"
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
              style={{
                display: "none"
              }}
            />
          </svg>
        </button>
      </div>
      <nav className="{'flex': open, 'hidden': !open}" className="flex-col flex-grow hidden md:flex md:justify-end md:flex-row">
        <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
          <li className={`mx-3 ${styles.growingUnderline}`}>
            <Link to="/publications/" activeClassName="active">
              Publications
            </Link>
          </li>
          <li className={`mx-3 ${styles.growingUnderline}`}>
            <Link to="/contact/" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Navigation
