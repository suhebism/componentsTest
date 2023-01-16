import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import styles from '../../styles/home.module.css'

const index = () => {
  return (

      <nav className={styles.navbar}>
        <div><Link href='/'>Logo</Link></div>
        <div>
          <Link href='/'>Home</Link>
          <Link href='/blog' >About</Link>
          <Link href='/contact'>Contact Us</Link>
        </div>
        <Button run={console.log("my message")} title='Test' />
      </nav>

  )
}

export default index;
