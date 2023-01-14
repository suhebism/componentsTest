import React, { Children } from 'react'
import styles from '../../styles/Home.module.css';

const Card = ({ children, ...props }) => {
  return (
    <div className={styles.card} {...props}>
        <div>{children}</div>
    </div>
  )
}

export default Card
