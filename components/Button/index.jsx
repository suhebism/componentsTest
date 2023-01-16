import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Button.module.css';
const index = (
  {
  onApprove,
  onDeny,
  title,
  run
}) => {
  return (
    <div>
      <button onClick={run} className={styles.button}>{onApprove}{onDeny}{title}</button>
    </div>
  )
}

export default index
